let shownow = 0

// notif tool
function notif(title, description, option) {
    if (shownow == 1) {
        $('.notif').addClass('hide')
        $('.notif').removeClass('show')
        shownow = 0
        setTimeout(function () {
            notifshow(title, description, option)
        }, 500)
    } else {
        notifshow(title, description, option)
    }
}

function notifshow(title, description, option) {
    shownow = 1
    if (option == 'settings') {
        $(document).on('click', '.notif', function (e) {
            showsettings()
        })
    }
    $('.n-title').text(title)
    $('.n-description').text(description)
    $('.notif').removeClass('hide')
    $('.notif').addClass('show')
    setTimeout(function () {
        $('.notif').addClass('hide')
        $('.notif').removeClass('show')
        shownow = 0
    }, 3000)
}

function showsettings() {
    $('.settings').removeClass('hide')
    $('.settings').addClass('looking')
}

$(document).on('click', '.close', function () {
    $('.settings').addClass('hide')
    $('.settings').removeClass('looking')
})

$('.colorselect').change(function() {
    val = $('.colorselect').val();
    console.log(val)
});
