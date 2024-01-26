<script setup lang="ts">
import type { WorkTrait } from '~/types'

defineProps<{ workTrait: WorkTrait[] }>()
const { t } = useI18n()

const workTraitI18nMapping: Record<WorkTrait['type'], string> = {
  handiwork: t('work_trait.handiwork'),
  transporting: t('work_trait.transporting'),
  farming: t('work_trait.farming'),
  gathering: t('work_trait.gathering'),
  mining: t('work_trait.mining'),
  planting: t('work_trait.planting'),
  lumbering: t('work_trait.lumbering'),
  medicine_production: t('work_trait.medicine_production'),
  kindling: t('work_trait.kindling'),
  watering: t('work_trait.watering'),
  generating_electricity: t('work_trait.generating_electricity'),
  cooling: t('work_trait.cooling'),
}
</script>

<template>
  <div>
    <h3>{{ t('common.work_trait') }}</h3>
    <div flex="~ gap-1">
      <div
        v-for="trait in workTrait" :key="trait.type"
        flex="~ items-center justify-center gap-1"
        border="~ rounded"
        p="x1.5 y1"
      >
        <NuxtImg :src="`/images/work_traits/${trait.type}.webp`" />
        <span text-sm>{{ workTraitI18nMapping[trait.type] }}</span>
      </div>
    </div>
  </div>
</template>
