<script setup lang="ts">
const items: string[] = [
  '/images/pola_1.jpg',
  '/images/pola_2.jpg',
  '/images/art_1.jpg',
  '/images/art_2.jpg',
  '/images/art_3.jpg',
  '/images/beer_1.jpg',
  '/images/beer_2.jpg',
];
</script>

<template>
  <div>
    <div class="m-auto mb-8 max-w-prose">
      <h1 class="text-4xl font-medium">
        hiro
      </h1>
    </div>
    <article class="m-auto max-w-prose">
      <div>
        <p>私のブログへようこそ!</p>
        <p>普段はVue.jsやTypeScriptを用いてフロントエンド開発を行なっています.プログラミングも好きですが,他にも好きなことがたくさんあります!</p>
        <p>ここでは,特に好きなことについて執筆を行なっています.</p>
        <h2 class="flex items-center text-2xl text-orange-400">
          技術
          <UIcon
            name="i-material-symbols-light-code-rounded"
          />
        </h2>
        <p>主にフロントエンド周辺について執筆しています.</p>
        <h2
          class="flex items-center text-2xl text-orange-400"
        >
          芸術<UIcon
            name="i-emojione-monotone:artist-palette"
          />
        </h2>
        <p>美術館や展示会に行った際の感想を執筆しています.</p>
        <h2
          class="flex items-center text-2xl text-orange-400"
        >
          ビール<UIcon
            name="i-emojione-monotone-clinking-beer-mugs"
          />
        </h2>
        <p>私はクラフトビールが特に好きです.美味しかったビールや気になるビールの情報について執筆します.</p>
        <p>気になるものがあれば是非ご覧になってください!</p>
      </div>
    </article>
    <VCarousel
      :items="items"
      auto-play
      indicators
      :width="400"
      :height="600"
    />
  </div>
</template>
