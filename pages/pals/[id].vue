<script setup lang="ts">
import type { Pal } from '~/types'
import PalElements from '~/component/pal/Elements.vue'
import PalWorkTrait from '~/component/pal/WorkTrait.vue'

const route = useRoute()
const id = route.params.id
const { data } = useAsyncData('pal', () => $fetch<Pal>(`/api/pal/${id}`))
if (!data) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  })
}

const { t } = useI18n()
</script>

<template>
  <div v-if="data">
    <h2>{{ data.name }}</h2>
    <PalElements :elements="data.element" />
    <PalWorkTrait :work-trait="data.work_traits" />
    <div>
      <h3>{{ t("common.drop_items") }}</h3>
      <div v-for="item in data.drop_items" :key="item">
        {{ item }}
      </div>
    </div>
    <div>
      <h3>{{ t('common.skill') }}</h3>
      <div>
        <p>{{ data.skill.name }}</p>
        <p>{{ data.skill.description }}</p>
      </div>
    </div>
  </div>
</template>
