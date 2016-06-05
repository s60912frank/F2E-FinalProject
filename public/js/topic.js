$(document).ready(function(){
  $('#changeNickname').click(function(){
    $.post('/changeNickname', { nickname: $('#nicknameText').val() }, function(){
      //alert("Topic added successfully");
      location.reload();
    });
  });

  $('.sendComment').click(function(){
    $.post('/comment', {
      topic: $('#topicTitle').text(),
      comment: $(this).siblings('.commentText').val()
    }, function(){
      //alert("Comment added successfully");
    });
    location.reload();
  });

  $('#logout').click(function(){
    $.get('/logout', function(){
      location.reload();
    });
  });
});
