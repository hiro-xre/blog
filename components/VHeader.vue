<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core';

// states
const isOpen = ref<boolean>(false);
const isLargeScreen = useMediaQuery(
  '(min-width: 960px)',
  // NOTE: サーバーレンダリング時のサイズを指定しています
  { ssrWidth: 959 },
);
const { isDark, colorMode } = useTheme();

// helpers
const toggleMenuDisplay = (): void => {
  isOpen.value = !isOpen.value;
};

// life-cycles
onMounted(() => {
  colorMode.preference = 'dark';
},
);
</script>

<template>
  <header>
    <nav
      class="fixed left-0 top-0 z-10 flex w-full items-center justify-between bg-black p-4"
    >
      <div class="flex items-center">
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
      <div
        v-if="isLargeScreen"
        class="flex items-center justify-end"
      >
        <UButton
          color="orange"
          variant="ghost"
          icon="i-emojione-monotone:thinking-face"
          :to="{ name: 'blogs' }"
        />
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
        <!-- TODO: グローバルステートに保存する -->
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
      <template v-else>
        <UButton
          label="MENU"
          icon="i-prime:bars"
          color="orange"
          variant="ghost"
          @click="toggleMenuDisplay()"
        />
        <!-- TODO: スタイル調整 -->
        <USlideover v-model="isOpen">
          <div class="flex-1 p-4">
            <UButton
              class="absolute end-5 top-5 z-10 flex"
              color="orange"
              variant="ghost"
              size="lg"
              icon="i-ic:baseline-close"
              @click="toggleMenuDisplay()"
            />
            <VHamburgerNavigation
              class="h-full"
              @click="toggleMenuDisplay()"
            />
          </div>
        </USlideover>
      </template>
    </nav>
  </header>
</template>
