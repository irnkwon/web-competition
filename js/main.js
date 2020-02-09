
/*
    General
*/
$(document).ready(function() {
    scrollToVisit();
    changeNavOnScroll();
});

/*
    Scroll Down
*/
function scrollToVisit() {
    $('.learn-more').click(function() {
        $('html, body').animate({
            scrollTop: $('#visit').offset().top
        }, 150);
    });
}

/*
    Navbar
*/
function changeNavOnScroll() {
    var from = $('#visit').offset().top;

    $(window).scroll(function() {
        if ($(window).scrollTop() > from) {
            $('#navbar').css("background", "#000000");
        } else {
            $('#navbar').css("background", "none");
        }
    })
}