export default defineEventHandler(async () => {
  const assetDatasetStorage = useStorage('assets:dataset')
  const pals = await assetDatasetStorage.getItem<any[]>(`pals.json`)
  const palsVariants = await assetDatasetStorage.getItem<any[]>(`pals_variants.json`)

  if (!pals || !palsVariants)
    return createError('unexpected error')

  return pals.concat(palsVariants)
})
