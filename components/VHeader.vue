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
      <div class="text-left">
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
      <div class="text-center">
        <ULink to="/">hirolog</ULink>
      </div>
      <div class="text-right">
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
        <ClientOnly>
          <UButton
            :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
            color="orange"
            variant="ghost"
            @click="isDark = !isDark"
          />
        </ClientOnly>
      </div>
    </nav>
  </header>
</template>
