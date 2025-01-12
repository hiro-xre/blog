<script setup lang="ts">
const items: string[] = [
  '/images/pola_1.jpg',
  '/images/pola_2.jpg',
  '/images/art_1.jpg',
  '/images/art_2.jpg',
  '/images/art_3.jpg',
  '/images/beer_1.jpg',
  '/images/beer_2.jpg',
  '/images/beer_3.jpg',
  '/images/beer_4.jpg',
];
</script>

<template>
  <div>
    <div class="m-auto mb-8 max-w-prose">
      <h1 class="text-4xl font-medium">
        hiro
      </h1>
    </div>
    <article class="m-auto mb-10 max-w-prose">
      <div>
        <p>私のブログへようこそ!</p>
        <p>普段はVue.jsやTypeScriptを用いてフロントエンド開発を行なっています.プログラミングも好きですが,他にも好きなことがたくさんあります!</p>
        <p>ここでは,特に好きなことについて執筆を行なっています.</p>
        <IndexVBlogContentInfo
          title="技術"
          text="主にフロントエンド周辺について執筆しています."
          icon-name="i-material-symbols-light-code-rounded"
        />
        <IndexVBlogContentInfo
          title="芸術"
          text="美術館や展示会に行った際の感想を執筆しています."
          icon-name="i-emojione-monotone:artist-palette"
        />
        <IndexVBlogContentInfo
          title="ビール"
          text="美味しかったクラフトビールについて執筆します."
          icon-name="i-emojione-monotone-clinking-beer-mugs"
        />
        <p>ジャンルを問わずに執筆することもあります.</p>
        <p>気になるものがあれば是非ご覧になってください!</p>
      </div>
    </article>
    <VCarousel
      :items="items"
      auto-play
      indicators
      :width="300"
      :height="510"
    />
  </div>
</template>
