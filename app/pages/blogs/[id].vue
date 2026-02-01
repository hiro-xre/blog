<script setup lang="ts">
const route = useRoute();
const { data, status } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first();
});

console.log(status.value);

useHead({
  title: data.value?.title,
  meta: [
    { property: 'og:description', content: data.value?.description },
  ],
});
</script>

<template>
  <main class="mt-16">
    <template v-if="status === 'pending'">
      <div class="flex items-center">
        <div class="w-5/6 space-y-8">
          <USkeleton class="h-4 w-3/4" />
          <USkeleton class="h-4 w-full" />
          <USkeleton class="h-4 w-3/4" />
          <USkeleton class="h-4 w-full" />
          <USkeleton class="h-4 w-3/4" />
          <USkeleton class="h-4 w-full" />
          <USkeleton class="h-4 w-3/4" />
          <USkeleton class="h-4 w-full" />
          <USkeleton class="h-4 w-3/4" />
          <USkeleton class="h-4 w-full" />
          <USkeleton class="h-4 w-3/4" />
          <USkeleton class="h-4 w-full" />
          <USkeleton class="h-4 w-3/4" />
          <USkeleton class="h-4 w-full" />
        </div>
      </div>
    </template>
    <ContentRenderer
      v-else
      :value="data"
    />
  </main>
</template>
