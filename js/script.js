$(document).ready(function() {
    $('.slide-left').addClass('move-left');
    $('.slide-down').css("background-position", "center center");
    $('.white-rectangle-slideout').addClass('move-right');
    if ($(window).width() < 414) {
        $('.louis-photo').insertBefore('.louis');
     }
}); 