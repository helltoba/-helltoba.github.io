<script lang="ts">
    import "../app.css"
    import { House, FileMinus, Info } from "lucide-svelte";
	import { setupViewTransition } from 'sveltekit-view-transition';
	setupViewTransition();

    import { page } from '$app/stores';

    //　css遅延読み込みの跡
    // import { onMount } from "svelte";
    // onMount(() => {
    //     const loadCss = async () => {
    //         await import ("../app.css");
    //     }
    //     loadCss();
    // })

	let { children } = $props();
</script>

<nav>
    <div class="floatnavbutton shadow" class:activefloat={$page.url.pathname == "/"} class:gray={$page.url.pathname == "/kaigakusai/99"} class:black={$page.url.pathname == "/kaigakusai/60"}>
        <a href="/"><House size="50" strokeWidth="1">home</House></a>
    </div>

    <br>

    <div class="floatnavbutton shadow" class:activefloat={$page.url.pathname == "/docs"} class:none={$page.url.pathname == "/kaigakusai/99" || $page.url.pathname == "/kaigakusai/60"}>
        <a href="/docs"><FileMinus size="50"strokeWidth="1">docs</FileMinus></a>
    </div>

    <br>

    <div class="floatnavbutton shadow" class:activefloat={$page.url.pathname == "/info"} class:none={$page.url.pathname == "/kaigakusai/99" || $page.url.pathname == "/kaigakusai/60"}>
        <a href="/info"><Info size="50"strokeWidth="1">info</Info></a>
    </div>
</nav>

<div class="main">
	{@render children()}
</div>

<style>
    a {
        color: var(--gray-12);
        text-decoration: none;
    }

    .floatnavbutton {
        padding: 5px;
        width: 60px;
        height: 60px;
        border-radius: 10px;
        margin: auto;
        transition: .5s cubic-bezier(.56,1.13,.28,1.24);
        background-color: var(--red-4);
    }

    .gray {
        background-color: var(--gray-3);
    }

    .black {
        background-color: black;
    }

    .activefloat {
        background-color: var(--red-6);
    }

    nav {
        position: fixed;
        bottom: 3%;
        left: 0;
        width: 650px;
        display: flex;
        flex-direction: row;
        text-align: center;
        transform: translate(-50%, -50%);
        left: 50%;
    }

    .none {
        display: none;
    }
    
	@media (max-width: 650px) {
        nav {
            width: 100%;
            transform: unset;
            left: 0;
            bottom: 5%;
        }
    }
</style>