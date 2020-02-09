
/*
    General
*/
$(document).ready(function() {
    scrollDown();
    moveRight();
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

/*
    Slider
*/
function moveRight() {
    $('.fa-chevron-left').click(function(){
        $(".active").removeClass('landing-2').addClass('landing-1');
    });

    $('.fa-chevron-right').click(function(){
        $(".active").removeClass('landing-2').addClass('landing-3');
    });
}