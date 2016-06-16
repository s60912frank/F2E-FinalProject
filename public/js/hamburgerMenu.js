var main = function () {
    $('#HamburgerIcon').click(function () {
        $('#HamburgerMenu').animate({
            right: "0px"
        }, 200);
        $('#shadeCover').fadeIn(200);
    });
    $('#shadeCover').click(function () {
        $('#HamburgerMenu').animate({
            right: "-500px"
        }, 500);
        $('#shadeCover').fadeOut(500);
    });
};

$(document).ready(main);
