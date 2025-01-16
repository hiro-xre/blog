<script setup lang="ts">
const route = useRoute();
const { data } = await useAsyncData(route.params.id, () => queryContent('blogs', route.params.id).findOne());

useHead({
  title: `${route.params.id}`,
  meta: [
    { property: 'og:description', content: data.value.description },
  ],
});
</script>

<template>
  <main>
    <ContentDoc />
  </main>
</template>
