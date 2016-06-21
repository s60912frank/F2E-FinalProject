
var main = function () {
    var initial = $("#plug1").position().left;
    $("#plug1").draggable({
        axis: "x"
    });
    $("#plug1").draggable({
        drag: function () {
            if ($("#plug1").position().left - initial > $("body").width() * 0.281)
            {
                $("body").animate({ 'background-color': '#FFA500' }, 'slow');
                $("#main").fadeOut(500, function () {
                        $("#main").attr("src", "./image/change.png");
                    $("#main").fadeIn(500);
                })
                return false;
            }  
        }
    });





    //debug¥Î
    $("#main").click(function() {
        console.log(document.getElementById("#main").style.content);
    });
};

$(document).ready(main);