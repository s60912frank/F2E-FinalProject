$(document).ready(
  function(){
    $(window).scroll(function (event){
      var pos = $(window).scrollTop();
      if(pos <= 400){
        var color = 'rgba(255, 255, 255,' + pos / 500 + ')';
        $('#navbar').css('background-color', color);
        $('#navbar').css('height', 50 * ((400 - pos) / 400) + 50);
        $('.dynMarginTop').css('margin-top', 13 * (400 - pos) / 400 + 12);
      }
    });
  }
);
