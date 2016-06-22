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

    $('#hamCross').click(function(){
      $('#HamburgerMenu').animate({
          right: "-500px"
      }, 500);
      $('#shadeCover').fadeOut(500);
    });

    $('#searchIcon').click(function(){
      if($(window).width() < 768 && !isInputOpen){
        $('#searchInput').css('margin-right', -$('#searchInput').width());
        $('#searchInput').show();
        $('#logo').animate({ 'margin-left': -$('#logo').width() }, 200);
        $('#searchInput').animate({ 'margin-right': '0px' }, 200);
        isInputOpen = true;
      }
      else{
        var searchText = $('#searchInput').val();
        if(searchText != ""){
          window.location = '/search?text=' + $('#searchInput').val();
        }
        else{
          alert("關鍵字不能為空!");
        }
      }
    });

    $('#searchInput').keypress(function(e){
      if(e.which == 13){
        var searchText = $(this).val();
        if(searchText != ""){
          window.location = '/search?text=' + $('#searchInput').val();
        }
        else{
          alert("關鍵字不能為空!");
        }
      }
    });
};

$(document).ready(main);
