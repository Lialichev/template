$(document).ready(() => {
    // Cookies
    // function cookies() {
    //     let cookies = $('.cookies');
    //     let data = sessionStorage.getItem('cookie');
    //     if (data === null) {
    //         cookies.addClass('js-show');
    //     }
    //
    //     $('.cookies .btn').on('click', function (e) {
    //         e.preventDefault();
    //         cookies.removeClass('js-show');
    //         sessionStorage.setItem('cookie', 'ok');
    //     });
    // }
    // cookies();

    // Clamping Footer
    const clampingFooter = () => {
        const footerWidth = $('.footer').outerHeight();

        $('.height-helper').css('margin-top', `-${footerWidth}px`);
        $('.content-wrap').css('padding-top', `${footerWidth}px`);
    };

    clampingFooter();

    $(window).on('load resize', () => {
        clampingFooter();
    });

    // PopUp
    // function popUp() {
    //     $('.js-popup-button').on('click', function () {
    //         $('.popup').removeClass('js-popup-show');
    //         var popupClass = '.' + $(this).attr('data-popupShow');
    //         $(popupClass).addClass('js-popup-show');
    //         $('body').addClass('no-scroll');
    //     });
    //
    //     // Close PopUp
    //     $('.js-close-popup').on('click', function () {
    //         $('.popup').removeClass('js-popup-show');
    //         $('body').removeClass('no-scroll');
    //     });
    //
    //     $('.popup').on('click', function (e) {
    //         var div = $(".popup__wrap");
    //         if (!div.is(e.target) && div.has(e.target).length === 0) {
    //             $('.popup').removeClass('js-popup-show');
    //             $('body').removeClass('no-scroll');
    //         }
    //     });
    // }
    //
    // popUp();

    // Select
    $('select').selectric({
        maxHeight: 200
    });
});