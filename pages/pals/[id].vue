<script setup lang="ts">
import type { Pal } from '~/types'

const route = useRoute()
const id = route.params.id
const { data } = useAsyncData('pal', () => $fetch<Pal>(`/api/pal/${id}`))
if (!data) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  })
}
</script>

<template>
  <div>
    <pre> {{ data }}</pre>
  </div>
</template>
