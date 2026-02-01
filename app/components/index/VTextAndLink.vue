<script setup lang="ts">
type Props = {
  text: string;
};
defineProps<Props>();
</script>

<template>
  <div class="flex">
    <p>{{ text }}</p>
    <UButton
      label="読んでみる"
      color="orange"
      variant="link"
      icon="i-material-symbols-arrow-circle-right-outline-rounded"
      :to="{ name: 'blogs' }"
    />
  </div>
</template>
