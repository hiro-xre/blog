<script setup lang="ts">
const BLOGS_TITLE = 'blog';
useHead({
  title: BLOGS_TITLE,
});
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="mb-4 flex items-center gap-2 text-2xl">
      <UIcon name="i-emojione-monotone-orange-book" />
      記事一覧
      <UIcon name="i-emojione-monotone-orange-book" />
    </div>
    <li>
      <NuxtLink :to="{ name: 'blogs-id', params: { id: '2025-target' } }">
        2025年の目標
      </NuxtLink>
    </li>
  </div>
</template>
