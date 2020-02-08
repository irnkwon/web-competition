
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
    $(".learn-more").click(function() {
        $("html, body").animate({
            scrollTop: $("#visit").offset().top
        }, 150);
    });
}

/*
    Slider
*/
function moveRight() {
    $(".fa-chevron-right").click(function(){
    });
}