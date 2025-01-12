<script setup lang="ts">
type Props = {
  items?: string[];
  autoPlay?: boolean;
  autoPlayMS?: number;
  indicators?: boolean;
  width?: number;
  height?: number;
  draggable?: boolean;
};
const { items = [], autoPlay = false, autoPlayMS = 5000, indicators = false, width = 300, height = 400, draggable = false } = defineProps<Props>();

const carouselRef = ref();

onMounted(() => {
  if (!autoPlay) return;
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, autoPlayMS);
});
</script>

<template>
  <UCarousel
    ref="carouselRef"
    v-slot="{ item }"
    :items="items"
    :indicators="indicators"
  >
    <img
      :src="item"
      :width="width"
      :height="height"
      :draggable="draggable"
    >
  </UCarousel>
</template>
