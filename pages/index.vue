<script setup lang="ts">
const items: string[] = [
  '/images/pola_1.jpg',
  '/images/pola_2.jpg',
  '/images/art_1.jpg',
  '/images/art_2.jpg',
  '/images/art_3.jpg',
  '/images/beer_1.jpg',
  '/images/beer_2.jpg',
];
</script>

<template>
  <UContainer>
    <ColorScheme>
      <USelect
        v-model="$colorMode.preference"
        :options="['system', 'light', 'dark']"
      />
    </ColorScheme>
    <NuxtLink :to="{ name: 'blogs' }">
      Blog一覧へ
    </NuxtLink>
    <VCarousel
      :items="items"
      auto-play
      indicators
      :width="400"
      :height="600"
    />
  </UContainer>
</template>
