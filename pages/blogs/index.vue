<script setup lang="ts">
const BLOGS_TITLE = '記事一覧';

useHead({
  title: BLOGS_TITLE,
  meta: [
    { property: 'og:description', content: '技術や芸術、ビール等についての記事一覧です。' },
  ],
});
</script>

<template>
  <div class="mt-16 flex flex-col items-center">
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
    <li>
      <NuxtLink :to="{ name: 'blogs-id', params: { id: '2025-beer-izakaya-baru-go' } }">
        IZAKAYA 場琉 GOO
      </NuxtLink>
    </li>
  </div>
</template>
