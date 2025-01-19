<script setup lang="ts">
type HTMLElementTagName = keyof HTMLElementTagNameMap;
type Props = {
  tag: Extract<HTMLElementTagName, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' >;
  titleSize: string;
};
defineProps<Props>();
</script>

<template>
  <component
    :is="tag"
    :class="titleSize"
  >
    <slot />
  </component>
  <slot name="description" />
</template>
