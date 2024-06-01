$(window).on('load resize', function () {
    if ($(window).width() <= 650) {
        $('.float1').css('left', '20px')
        $('.float3').css('right', '20px')
        $('body').css('max-width', '100%')
    } else {
        $('.float1').css('left', $(window).width()/2-280)
        $('.float3').css('right', $(window).width()/2-280)
        $('body').css('max-width', '600px')
    }
})

// load
function load() {
    setTimeout(function () {
        $('.loading').addClass('hide')
    }, 200)
    setTimeout(function () {
        $('.content').removeClass('hide')
        $('.content').css('padding-top', '80px')
    }, 400)
    setTimeout(function () {
        $('.float1').removeClass('hide')
        $('.float1').addClass('floatup')
    }, 500)
    setTimeout(function () {
        $('.float2').removeClass('hide')
        $('.float2').addClass('floatup')
    }, 600)
    setTimeout(function () {
        $('.float3').removeClass('hide')
        $('.float3').addClass('floatup')
    }, 700)
}

$(document).on('click', 'a', function (e) {
    e.preventDefault()

    const from = location.origin + location.pathname + location.search
    const to = $(this).prop('href')
    const check = to.replace(from, '')

    if ($(this).attr('target') == '_blank' || to.indexOf(location.origin) == -1) {
        outpage(to)
    } else if (check.indexOf('#') == 0 || check == '') {
        let target = 0
        if (check != '') {
            target = $(check).offset().top
        }
        samepage()
    } else {
        nextpage(to)
    }
})

// out
function outpage(target) {
    window.open(target, '_blank')
}

// next
function nextpage(target) {
    $('.content').addClass('hide')
    setTimeout(function () {
        $('.loading').removeClass('hide')
    }, 200)
    setTimeout(function () {
        $('.float1').addClass('hide')
    }, 300)
    setTimeout(function () {
        $('.float2').addClass('hide')
    }, 400)
    setTimeout(function () {
        $('.float3').addClass('hide')
    }, 500)
    setTimeout(function () {
        window.location = target
    }, 700)
}

// same
function samepage() {
    $('body').css('background-color', 'brown')
    setTimeout(function () {
        $('body').css('background-color', 'rgb(77, 44, 44)')
    }, 200)
}