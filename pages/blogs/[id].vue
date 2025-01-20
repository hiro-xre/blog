<script setup lang="ts">
const route = useRoute();
const { data } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first();
});

useHead({
  title: data.value?.title,
  meta: [
    { property: 'og:description', content: data.value?.description },
  ],
});
</script>

<template>
  <main class="mt-16">
    <ContentRenderer
      v-if="data"
      :value="data"
    />
  </main>
</template>
