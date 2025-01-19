<script setup lang="ts">
type HTMLElementTagName = keyof HTMLElementTagNameMap;

type Props = {
  tag: Extract<HTMLElementTagName, 'ol' | 'ul'>;
  items: string[];
  listStyle: string;
};
defineProps<Props>();
</script>

<template>
  <slot />
  <component
    :is="tag"
    :class="['list-inside', listStyle]"
  >
    <li
      v-for="(item, index) in items"
      :key="`${index}:${item}`"
    >
      {{ item }}
    </li>
  </component>
</template>
