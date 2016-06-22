$(document).ready(
  function(){
    $('#submit').click(
      function(){
        $.post('/changeNickname', {nickname: $('#input input').val() }, function(){
          alert("更改暱稱完成!");
          location.reload();
        });
      }
    );
  }
);
