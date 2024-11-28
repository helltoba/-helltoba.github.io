<script lang="ts">
    import { page } from "$app/stores";
    import tippy from "tippy.js";
    import 'tippy.js/dist/tippy.css';
    import "@fontsource/unifont";
    import { Github, Code } from "lucide-svelte";
</script>

<div class="usefirefox">
    <a href="https://www.mozilla.org/ja/firefox" title="Firefox ブラウザ無料ダウンロード" target="_blank">
        <img src="/kgs/img_from_waybackmacine_by_foxkeh_jp.webp" alt="Firefox ブラウザ無料ダウンロード" height="50px">
    </a>
    <p>このサイトはデスクトップ版Firefoxでのアクセスを推奨しています。</p>
    <p>(jxlを利用しているためchrome系やモバイル火狐では画像が表示されません)</p>
</div>

<hr>

<div class="title">
    <img class="titleIN" src="/kgs/logo.jxl" alt="ローテクフェスティバル">
    <button use:tippy={{content: '作ってる途中でやる気が途切れたため用意しておりません。', placement: 'top'}}>パンフレットはこちら</button>
</div>

<div class="space"></div>

<hr>

<div>
    <p>第99回海学祭, 2064年11月29日, 30日</p>
</div>

<div class="box">
    <h3>駐車場について</h3>
    <p>当日は来客者様向けの駐車場を用意しておりませんので、何かしらの公共交通機関をご利用ください。</p>
</div>

<hr class="trans">

<h2 class="head">マップ</h2>
<div class="box">
    <img class="tt" src="/kgs/map.jxl" alt="マップ">
</div>

<hr class="trans">

<h2 class="head">タイムテーブル</h2>
<div class="box">
    <h3 class="head">DAY1</h3>
    <hr class="trans">
    <img class="tt" src="/kgs/day1tt.jxl" alt="1日目のタイムテーブル">
    <h3 class="head">DAY2</h3>
    <hr class="trans">
    <img class="tt" src="/kgs/day2tt.jxl" alt="2日目のタイムテーブル">
</div>

<hr class="trans">

<h2 class="head">イベント</h2>
<div class="box">
    <h3>毎年恒例抽選会</h3>
    <p>本校の学生のみ参加できます。</p>
</div>

<hr class="trans">

<h2 class="head">ライブ</h2>
<div class="box">
    <h3 class="head">DAY1</h3>
    <p>「この研究って意味あるんですか」</p>
    <p>KIN GNU(キン・グヌー)</p>
    <p>ヤスリ研器</p>
    <p>台数18回転</p>
    <p>レスバ世界ランカー</p>
    <p>植林が趣味です</p>
    <hr class="trans">
    <h3 class="head">DAY2</h3>
    <p>アルティメット単位認定</p>
    <p>弱かったから来年もニューゲーム確定</p>
    <p>チキン</p>
    <p>不可使用電卓</p>
    <p>〇〇からしか得られない栄養</p>
    <p>多重度分布のデータベース作成</p>
</div>

<hr class="trans">

<h2 class="head">展示</h2>
<div class="box">
    <p>TP</p>
    <p>海学祭第100回前特集</p>
    <p>各研究室</p>
    <p>22代目ゲーム開発同好会</p>
    <p>写真同好会</p>
    <p>模型部</p>
    <p>マリカ同好会</p>
    <p>軽音部</p>
    <p>白髪同好会</p>
</div>

<hr class="trans">

<h2 class="head">模擬店</h2>
<div class="box">
    <p>世界の海たん</p>
    <p>ハイパーロングチュロヌ</p>
    <p>よしよし製麺</p>
    <p>暖かい犬販売なう</p>
    <p>大判焼き</p>
    <p>煎餅HQ</p>
    <p>田中有限公司</p>
    <p>souやな</p>
    <p>神のポップコーン</p>
    <p>いいですかー</p>
    <p>お食事券</p>
</div>

<hr>

<footer>
    <p><a href="https://github.com/helltoba" target="_blank"><Github/></a> <a href="https://github.com/helltoba/helltoba.github.io" target="_blank"><Code/></a></p>
    <p>Copyright (c) 2024 HellToba Project</p>
    <p>そのうち一部のコードにオープンソースライセンスが設定されます。</p>
    <p>これは完全なる<span class="ul">ジョーク</span>です。<span class="ul">真に受けないでください</span>。冗談を冗談と分かる人間になってください。また本プロジェクトと学生会の間に関わりは<span class="ul">一切ありません</span>。</p>
</footer>

<div class="bg"></div>

<style>
    .tt {
        width: 85vw;
    }

    .title {
        position: relative;
        left: 50%;
        transform: translate(-50%);
        height: calc(100% - 165px);
        margin: auto;
    }

    .titleIN {
        margin-top: 20vh;
        width: 80vw;
    }

    .space {
        padding-bottom: 20vh;
    }

    button {
        margin: 10px;
        padding: 5px;
        background-color: #D8D8D8;
        box-shadow: 6px -6px #BFBFBF;
        color: #67A468;
    }

    @media (min-width: 650px) {
        .titleIN {
            margin-top: 20vh;
            width: 600px;
        }
        .tt {
            width: 30vw;
        }
    }

    .bg {
        background-color: black;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    hr {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .box {
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 10px;
        border: 1px;
        border-color: white;
        border-style: solid;
    }

    .head {
        background-color: #D9D9D9;
        color: #67A468;
    }

    .trans {
        opacity: 0%;
    }

    footer {
        margin-top: auto;
    }

    a {
        color: white;
        text-decoration: underline;
    }

    img {
        color: white;
    }

    .ul {
        text-decoration: underline;
    }
</style>

<svelte:head>
    <title>第99回海学祭</title>
    <link rel="icon" href="/kgs/logo.svg">
    <meta property="og:url" content="{$page.url.href}"/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="docs"/>
    <meta property="og:description" content="鳥羽の池上町にて、2064年11月29日,11月30日に開催される第99回海学祭のサイトかも"/>
    <meta property="og:site_name" content="HellToba海学祭特設サイト"/>
    <meta property="og:image" content="/kgs/logo.svg"/>
    <meta name="description" content="鳥羽の池上町にて、2064年11月29日,11月30日に開催される第99回海学祭のサイトかも"/>
    <meta name="keywords" content="海学祭, かいがくさい, kaigakusai, HellToba, helltoba, hell toba, へるとば, 地獄鳥羽, 99回, 第99回, hello toba">
    <style>
        body {
            font-family: "Unifont" !important;
            text-align: center;
            padding-top: 50px !important;
        }
    </style>
</svelte:head>