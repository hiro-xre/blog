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
  <div>
    <VHeader />
    <VCarousel
      :items="items"
      auto-play
      indicators
      :width="400"
      :height="600"
    />
  </div>
</template>
