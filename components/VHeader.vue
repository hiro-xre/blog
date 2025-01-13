<script setup lang="ts">
const colorMode = useColorMode('dark');
const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  },
});
</script>

<template>
  <header>
    <nav class="grid h-24 grid-cols-3 gap-2 p-4">
      <div class="flex text-left">
        <UButton
          color="orange"
          variant="ghost"
          to="/"
        >
          <UAvatar
            size="md"
            src="/images/avater.jpg"
            alt="Avatar"
          />
        </UButton>
      </div>
      <div class="flex items-center justify-center">
        <ULink to="/">hirolog</ULink>
      </div>
      <div class="flex text-right">
        <UButton
          color="orange"
          variant="ghost"
          icon="i-material-symbols-light-code-rounded"
          :to="{ name: 'blogs' }"
        />
        <UButton
          color="orange"
          variant="ghost"
          icon="i-emojione-monotone:artist-palette"
          :to="{ name: 'blogs' }"
        />
        <UButton
          color="orange"
          variant="ghost"
          icon="i-emojione-monotone-clinking-beer-mugs"
          :to="{ name: 'blogs' }"
        />
        <ClientOnly v-if="!colorMode?.forced">
          <UButton
            :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
            color="orange"
            variant="ghost"
            @click="isDark = !isDark"
          />
          <template #fallback>
            <div class="size-8" />
          </template>
        </ClientOnly>
      </div>
    </nav>
  </header>
</template>
