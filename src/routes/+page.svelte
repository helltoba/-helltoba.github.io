<script lang="ts">
    import { page } from "$app/stores";
</script>

<p>地獄へようこそ</p>
<h1>HellToba Project</h1>
<br>

<article>
    <h2>HellToba Projectとは</h2>
    <p>あとでかんがえよう</p>

    <br>

    <h2>われらの取り組み</h2>
    <ul>
        <li>Discordサーバー</li>
        <li>BOT運用</li>
        <li><a href="https://github.com/23201IshiiKanata/ultimate-grades-calc" target="_blank">アルティメット成績計算機</a></li>
        <li>etc</li>
    </ul>

    <br>

    <h2>ゲームをプレイ！</h2>
    <h3><a href="https://23201ishiikanata.github.io/ultimate-grades-calc/public/host">アルティメット成績計算機</a></h3>
    <p>外部サイトが開きます</p>

    <br>

    <h2>このサイトのソースコード</h2>
    <h3><a href="https://github.com/helltoba/helltoba.github.io">https://github.com/helltoba/helltoba.github.io</a></h3>
    <p>ライセンス未設定です</p>
</article>

<svelte:head>
    <title>home</title>
    <meta property="og:url" content="{$page.url.href}"/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="home"/>
    <meta property="og:description" content="HellTobaとかいうバカの集まりのウェブサイト"/>
    <meta property="og:site_name" content="HellToba"/>
    <meta property="og:image" content="/favicon.png"/>
    <meta name="description" content="HellTobaとかいうバカの集まりのウェブサイト"/>
</svelte:head>