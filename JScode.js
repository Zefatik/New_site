/**АНИМАЦИЯ РАСТЕНИЯ**/
$(window).on('scroll', function() {
    var smokeblock = $('.animplant'),
        scroll = $(this).scrollTop();
    if (scroll > 20) {
        smokeblock.addClass('animationplant');
    } else {
        smokeblock.removeClass('animationplant');
    }
});