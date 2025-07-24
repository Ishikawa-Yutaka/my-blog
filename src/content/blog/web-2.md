---
title: 'AstroでSwiperが動かない！解決策は？'
date: 2025-07-15
category: 'web'
tags: ['web', 'astro', 'blog']
description: 'AstroでSwiperが動かない！解決策は？'
image: 'images/img-test.png'
---

## Swiper が動かない、なぜ？

Swiper を使ってスライダーを実装しようと、公式サイトのコード通りに CDN リンクと Script タグを書きました。ところが、動かない……！
Astro の仕様が影響しているのか、それとも書き方のミスか？
いろいろ試してみたものの、自力では解決できずに行き詰まってしまいました。

## これを書いたら動いた！

そこで頼ったのは、やはり AI 先生。質問してみたところ、「公式コードに document.addEventListener('DOMContentLoaded', function() {...}) を追加してみて」とのアドバイス。
半信半疑で試してみたら……なんと、動く！さすが AI 先生、頼りになります。

## 原因はなに？

調べてわかったのは、Swiper は `<div class="swiper"> `や `<div class="swiper-slide"> `など、特定の HTML 構造が存在していることを前提に動作するということ。
もし JavaScript が、これらの要素がまだ生成されていないタイミングで実行されると、Swiper はうまく初期化できず動かない、というわけです。
おそらく Astro の仕様でタイミングがずれているのだと思います。

そのため、DOMContentLoaded イベントを使って「DOM ツリーが完全に構築されてから Swiper の初期化コードを実行する」ようにする必要があった、ということですね。

なるほど、これでまたひとつ経験値を得ました。Web 制作の道は、こうした小さな不具合を地道に一つずつ乗り越えていくしかないんだなと実感しました。引き続き、頑張っていきます！
