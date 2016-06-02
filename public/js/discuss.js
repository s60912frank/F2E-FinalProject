$(document).ready(function(){
  $('#addTopic').click(function(){
    $.post('/addTopic', { name: $('#topicText').val() }, function(){
      //alert("Topic added successfully");
      location.reload();
    });
  });

  $('.sendComment').click(function(){
    $.post('/comment', {
      topic: $(this).siblings('.topicTitle').text(),
      comment: $(this).siblings('.commentText').val()
    }, function(){
      //alert("Comment added successfully");
      location.reload();
    });
  });

  $('#logout').click(function(){
    $.get('/logout', function(){
      location.reload();
    });
  });
});
