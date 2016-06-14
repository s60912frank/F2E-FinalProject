var main = function () {
    $('#HamburgerIcon').click(function () {
        $('#HamburgerMenu').animate({
            right: "0px"
        }, 200);
    });
    $('#CrossIcon').click(function () {
        $('#HamburgerMenu').animate({
            right: "-500px"
        }, 500);
    });
};

$(document).ready(main);