<script setup lang="ts">
const TOP_TITLE = 'hirolog';
useHead({
  titleTemplate: (titleChunk: string | undefined): string => {
    let title = TOP_TITLE;
    if (titleChunk != undefined) {
      title = `${titleChunk} | ${TOP_TITLE}`;
    }
    return title;
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
