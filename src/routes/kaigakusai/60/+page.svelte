<script lang="ts">
    import { page } from "$app/stores";
    import 'tippy.js/dist/tippy.css';
    import { Github, Code } from "lucide-svelte";
    import Marquee from "svelte-fast-marquee";
</script>

<nav>

</nav>

<header>
    <h2>HellToba出場します!<br>第60回海学祭に!</h2>
</header>

<hr>

<article>
    <p>私達はとうとう決断しました。</p>
    <p>「来年模擬店だそう」と。</p>
</article>

<hr>

<menu>
    <div class="menu_i">
        <Marquee speed={10} gradient={true} gap={"20px"}>
            <img src="/60/1.webp" alt="ポップコーン" class="menu_list">
            <img src="/60/2.webp" alt="ココア" class="menu_list">
            <img src="/60/3.webp" alt="お湯" class="menu_list">
        </Marquee>
    </div>
    <ul>
        <li>ポップコーン</li>
        <li>ココア</li>
        <li>お湯</li>
        <li>味噌汁</li>
    </ul>
</menu>

<hr>

<div class="code">
    <h2>模擬店投票</h2>
    <p>うちに入れてね</p>
    <img src="/60/qrcode.webp" alt="模擬店投票のQRコード" width="150px">
    <br><small>このQRコードに意味はない</small>
</div>

<hr>

<div>
    <h2>割引</h2>
    <p>2日目の後半にやるかもしれない。<br>システム開発中</p>
</div>

<hr>

<footer>
    <p><a href="https://github.com/helltoba" target="_blank"><Github/></a> <a href="https://github.com/helltoba/helltoba.github.io" target="_blank"><Code/></a></p>
    <p>Copyright (c) 2024 HellToba Project</p>
    <p>そのうち一部のコードにオープンソースライセンスが設定されます</p>
</footer>

<div class="bg"></div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

    .bg {
        background-color: white;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    .menu_list {
        height: 200px;
        border-radius: 10px;
    }

    ul {
        text-align: left;
        list-style-type: disc;
    }

    li {
        color: black;
    }

    hr {
        opacity: 0;
        padding: 20px;
    }

    footer {
        margin-top: auto;
    }

    a {
        color: white;
        text-decoration: underline;
    }

    header {
        top: 0;
        width: 100%;
        background-color: black;
        padding: 10px;
        border-radius: 1rem;
    }

    header h2 {
        color: white;
    }

    h2 {
        color: black;
    }

    a {
        color: black;
    }

    p {
        color: black;
    }
</style>

<svelte:head>
    <title>第60回海学祭に出場します!(予定)</title>
    <meta property="og:url" content="{$page.url.href}"/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="docs"/>
    <meta property="og:description" content="2025年11月29日,11月30日に開催される第60回海学祭にて模擬店を開く予定。ポップコーンや味噌汁など"/>
    <meta property="og:site_name" content="HellToba海学祭特設サイト"/>
    <meta property="og:image" content="/favicon.png"/>
    <meta name="description" content="2025年11月29日,11月30日に開催される第60回海学祭にて模擬店を開く予定。ポップコーンや味噌汁など"/>
    <meta name="keywords" content="海学祭, かいがくさい, kaigakusai, HellToba, helltoba, hell toba, へるとば, 地獄鳥羽, 60回, 第60回, hello toba">
    <style>
        body {
            font-family: 'Roboto', 'Noto Sans JP', sans-serif !important;
            text-align: center;
            padding-top: 50px !important;
        }
    </style>
</svelte:head>