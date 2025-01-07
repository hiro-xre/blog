<template>
  <UContainer>
    <ColorScheme>
      <USelect
        v-model="$colorMode.preference"
        :options="['system', 'light', 'dark']"
      />
    </ColorScheme>
    <NuxtLink :to="{ name: 'blogs' }">
      Blog一覧へ
    </NuxtLink>
  </UContainer>
</template>
