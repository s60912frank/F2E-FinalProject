$(document).ready(function(){
  $('.deleteTopic').click(function(){
    var jthis = $(this);
    $.post('/deleteTopic', { topic: jthis.parent().siblings('.topicTitle').text() }, function(){
      alert("成功刪除主題");
      jthis.parent().parent().remove();
    });
  });

  $(document).on('click', '.deleteComment', function(){
    var jthis = $(this);
    var data = {
      topic: jthis.parent().parent().siblings('h2').text(),
      uid: jthis.siblings('.uid').text(),
      comment: jthis.siblings('.commentText').text()
    };
    $.post('/deleteComment', data, function(){
      alert("成功刪除留言");
      jthis.parent().remove();
    });
  });

  $('.expand').click(function(){
    var jthis = $(this);
    if(jthis.text() == '展開'){
      $.get('/getComments?title=' + jthis.parent().siblings('h2').text(), function(data){
        if(data.length > 0){
          data.forEach(function(comment){
            var com = $('<div class="comment">');
            com.append($('<p class="commentText">').text(comment.comment));
            com.append($('<button class="deleteComment">').text("刪除留言"));
            com.append($('<p class="uid" style="display:none;">').text(comment.uid));
          });
        }
        else{
          var com =  $('<div>').text("沒有留言");
          com.prependTo(jthis.parent().siblings('.comments'));
        }
        jthis.text('收起');
      });
    }
    else{
      jthis.parent().siblings('.comments').children().each(function(){
        $(this).remove();
      });
      jthis.text('展開');
    }
  });
});
