$(document).ready(function(){
  $('.deleteTopic').click(function(){
    $.post('/deleteTopic', { topic: $(this).siblings('.topicTitle').text() }, function(){
      location.reload();
    });
  });

  $('.deleteComment').click(function(){
    var data = {
      topic: $(this).parent().parent().siblings('.topicTitle').text(),
      uid: $(this).siblings('.commentById').text(),
      comment: $(this).siblings('.commentContent').text()
    };
    //console.log(data);
    $.post('/deleteComment', data, function(){
      location.reload();
    });
  });
});
