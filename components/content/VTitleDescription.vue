<script setup lang="ts">
type Props = {
  title: string;
  titleSize: string;
};
defineProps<Props>();
</script>

<template>
  <div
    :class="titleSize"
  >
    {{ title }}
  </div>
  <slot />
</template>
