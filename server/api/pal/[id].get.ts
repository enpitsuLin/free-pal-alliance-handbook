import * as z from 'zod'

const paramsSchema = z.object({
  id: z.coerce.number(),
})

export default defineEventHandler(async (event) => {
  const result = await getValidatedRouterParams(event, (data) => {
    return paramsSchema.safeParseAsync(data)
  })
  if (result.success) {
    const id = result.data.id
    const assetDatasetStorage = useStorage('assets:dataset')
    const pals = await assetDatasetStorage.getItem<any[]>(`pals.json`)
    const palsVariants = await assetDatasetStorage.getItem<any[]>(`pals_variants.json`)

    if (!pals || !palsVariants || !id) {
      return createError({
        statusCode: 500,
        statusMessage: 'Unexpected Error: data was empty',
      })
    }

    const allPals = pals.concat(palsVariants)

    return allPals.find(i => i.id === id)
  }

  return createError({
    statusCode: 500,
    statusMessage: 'Unexpected Error: parse failed',
  })
})
