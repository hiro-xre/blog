<script setup lang="ts">
type Icon = Record<string, string>;
type Link = {
  label: string;
  type: string;
  to: Record<string, string> | string;
};

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
</script>

<template>
  <UVerticalNavigation
    class="items-center"
    :links="links"
    :ui="{ wrapper: 'truncate', label: 'text-white' }"
  >
    <template #icon="{ link }">
      <UIcon
        class="h-12 text-2xl"
        :name="icons[link.type].icon"
        :class="icons[link.type].color"
      />
    </template>
  </UVerticalNavigation>
</template>
