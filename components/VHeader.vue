<template>
  <header class="flex justify-between p-4">
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
    <nav class="grid grid-flow-col gap-2">
      <UButton
        color="orange"
        variant="ghost"
        icon="i-material-symbols-light-code-rounded"
        :to="{ name: 'blogs' }"
      />
      <UButton
        color="orange"
        variant="ghost"
        icon="i-emojione-monotone-orange-book"
        :to="{ name: 'blogs' }"
      />
      <UButton
        color="orange"
        variant="ghost"
        icon="i-emojione-monotone-clinking-beer-mugs"
        :to="{ name: 'blogs' }"
      />
      <UButton
        color="orange"
        variant="ghost"
        icon="i-simple-icons-x"
        target="_blank"
        to="https://x.com/hiro_xre"
      />
      <UButton
        color="orange"
        variant="ghost"
        icon="i-simple-icons-github"
        target="_blank"
        to="https://github.com/hiro-xre"
      />
      <UButton
        color="orange"
        variant="ghost"
        icon="i-emojione-monotone-envelope"
        target="_blank"
        to="mailto:xre0605@gmail.com"
      />
    </nav>
  </header>
</template>
