<script setup lang="ts">
import type { PalElement } from '~/types'

defineProps<{ elements: PalElement[] }>()
const { t } = useI18n()

const elementI18nMapping: Record<PalElement, string> = {
  grass: t('element.grass'),
  ground: t('element.ground'),
  electric: t('element.electric'),
  water: t('element.water'),
  fire: t('element.fire'),
  ice: t('element.ice'),
  dragon: t('element.dragon'),
  dark: t('element.dark'),
  neutral: t('element.neutral'),
}
</script>

<template>
  <div>
    <h2>{{ t('common.element') }}</h2>
    <div>
      <div v-for="element in elements" :key="element">
        <NuxtImg :src="`/images/elements/${element}.webp`" />
        {{ elementI18nMapping[element] }}
      </div>
    </div>
  </div>
</template>
