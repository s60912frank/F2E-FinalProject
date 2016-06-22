
var main = function () {
    var initial = $("#plug1").position().left;
    var activated = false;
    var zap = new Audio("./audio/electricShock.mp3");
    $("#plug1").draggable({
        axis: "x"
    });
    $("#plug1").draggable({
        drag: function () {
            if (!activated && $("#plug1").position().left - initial > $("body").width() * 0.281)
            {
                activated = true;
                $("#zap").show();
                zap.play();
                setTimeout(plugIn, 500);
                setTimeout(function () {
                    history.back();
                }, 2000);
                return false;
            }
            else if(activated){
                return false;
            }
        }
    });
    function plugIn() {
        $("#zap").hide();
        $("body").animate({ 'background-color': '#FFA500' }, 'slow');
        $("#main").fadeOut(500, function () {
            $("#main").attr("src", "./image/change.png");
            $("#main").fadeIn(500);
        })
    }
};

$(document).ready(main);