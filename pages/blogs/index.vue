<template>
  <div>
    <div>Blogs</div>
    <li>
      <NuxtLink :to="{ name: 'blogs-id', params: { id: 'sample' } }">
        sample
      </NuxtLink>
    </li>
  </div>
</template>
