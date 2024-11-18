<script lang="ts">
    import { page } from "$app/stores";
</script>

<h1>info</h1>
<br>

<article> 
    <p>情報はありません</p>
</article>

<svelte:head>
    <title>info</title>
    <meta property="og:url" content="{$page.url.href}"/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="info"/>
    <meta property="og:description" content="HellTobaに関する情報"/>
    <meta property="og:site_name" content="HellToba"/>
    <meta property="og:image" content="/favicon.png"/>
</svelte:head>