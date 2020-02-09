
/*
    General
*/
$(document).ready(function() {
    scrollDown();
});

/*
    Scroll Down
*/
function scrollDown() {
    $('.learn-more').click(function() {
        $('html, body').animate({
            scrollTop: $('#visit').offset().top
        }, 150);
    });
}