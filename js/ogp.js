$(window).on('load', function() {
    let hash = location.search
    if (hash == '') {
        url('https://helltoba.com/')
        title('HellToba - 地獄へようこそ')
        description('HellTobaのサイトのホーム')
    }
    if (hash == '?docs') {
        url('https://helltoba.com/?docs')
        title('HellToba - ドキュメント')
        description('それぞれのプロジェクトのドキュメントを書く予定')
    }
    if (hash == '?info') {
        url('https://helltoba.com/?info')
        title('HellToba - 情報')
        description('HellToba Projectについて')
    }
})

//url
function url(chr) {
    $('meta[property="og:url"]').attr('content', chr)
}

//title
function title(chr) {
    document.title = chr
    $('meta[property="og:title"]').attr('content', chr)
}

//description
function description(chr) {
    $('meta[name="description"]').attr('content', chr)
    $('meta[property="og:description"]').attr('content', chr)
}