<script setup lang="ts">
type Icon = Record<string, string>;
type Link = {
  label: string;
  type: string;
  to: Record<string, string> | string;
};
type Emit = {
  (e: 'click' | 'theme-toggle'): void;
};

const { isDark } = useTheme();
const icons: Record<string, Icon> = {
  thinking: {
    icon: 'i-emojione-monotone:thinking-face',
    color: 'text-orange-400',
  },
  code: {
    icon: 'i-material-symbols-light-code-rounded',
    color: 'text-orange-400',
  },
  art: {
    icon: 'i-emojione-monotone:artist-palette',
    color: 'text-orange-400',
  },
  beer: {
    icon: 'i-emojione-monotone-clinking-beer-mugs',
    color: 'text-orange-400',
  },
  theme: {
    icon: isDark.value ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid',
    color: 'text-orange-400',
  },
};
const links: Link[] = [
  {
    label: '思考',
    type: 'thinking',
    to: { name: 'blogs' },
  }, {
    label: '技術',
    type: 'code',
    to: { name: 'blogs' },
  }, {
    label: '芸術',
    type: 'art',
    to: { name: 'blogs' },
  },
  {
    label: 'ビール',
    type: 'beer',
    to: { name: 'blogs' },
  },
];

const emit = defineEmits<Emit>();
const handleClick = (link: Link) => {
  if (link.type === 'theme') {
    emit('theme-toggle');
  }
  emit('click');
};
</script>

<template>
  <div class="flex h-full flex-col space-y-2 pt-12">
    <UVerticalNavigation
      :links="links"
      :ui="{
        wrapper: 'space-y-1',
        base: 'flex items-center gap-3 border border-transparent px-4 py-3 transition-all duration-200',
        inactive: 'hover:border-orange-400/30 hover:bg-orange-400/5',
        active: 'border-orange-400 bg-orange-400/10 text-orange-400',
        label: 'text-lg',
      }"
      @select="handleClick"
    >
      <template #icon="{ link }">
        <UIcon
          :name="icons[link.type].icon"
          class="text-2xl"
          :class="icons[link.type].color"
        />
      </template>
    </UVerticalNavigation>

    <UButton
      class="flex w-full items-center gap-3 border border-transparent px-4 py-3 transition-all duration-200 hover:border-orange-400/30 hover:bg-orange-400/5"
      :icon="icons.theme.icon"
      color="orange"
      variant="ghost"
      @click="emit('theme-toggle')"
    >
      <span class="text-lg">
        {{ isDark ? 'ダークモード' : 'ライトモード' }}
      </span>
    </UButton>
  </div>
</template>
