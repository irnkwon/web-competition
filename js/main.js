/*
    Scroll Down
*/
$(document).ready(function() {
    $('.scroll-down').click(function() {
        $('html, body').animate({
            scrollTop: $('#visit').offset().top
        }, 150);
    });
});
