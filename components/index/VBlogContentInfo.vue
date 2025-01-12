<script setup lang="ts">
type Props = {
  title: string;
  text: string;
  iconName: string;
};
defineProps<Props>();
</script>

<template>
  <h2 class="flex items-center text-2xl text-orange-400">
    {{ title }}
    <UIcon
      :name="iconName"
    />
  </h2>
  <IndexVTextAndLink
    :text="text"
  />
</template>
