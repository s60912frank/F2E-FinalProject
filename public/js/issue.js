var socket = io('http://localhost:8080');
$(document).ready(
  function(){
    socket.emit('topic', { topic: $('#issueTitle div').text() });
    socket.on('comment', function(data){
      var component = '<div class="comment"><div class="nickname"><p>' + data.name + '</p></div>'+
                       '<div class="reply">';
      var time = new Date(data.time);
      var timeString = '@' + (time.getMonth() + 1) + '/' + time.getDate() + ' ' + time.getHours() + ":" + time.getMinutes();
      if(data.comment.indexOf("http") != -1 || data.comment.indexOf("https") != -1){
        console.log("WHEEEE");
        if(data.comment.indexOf(".jpg") != -1 ||
           data.comment.indexOf(".jpeg") != -1 ||
           data.comment.indexOf(".png") != -1 ||
           data.comment.indexOf(".gif") != -1 ||
           data.comment.indexOf("www.youtube.com") != -1) {
          component += '<p class="commentText">' + data.comment + '</p><button class="expand">展開</button>';
        }
        else{
          component += '<a href=' + data.comment + '><p class="commentText">' + data.comment + '</p></a>';
        }
      }
      else{
        component += '<p class="commentText">' + data.comment + '</p></a>';
      }
      component += '<p>&nbsp;' + timeString + '</p></div></div>';
      $('#CommentSection').prepend(component);
    });
    //點按鈕展開!
    $(document).on('click','.expand',
      function(){
        console.log("EXPAND!");
        var jthis = $(this);
        if(jthis.text() == "展開"){
          var commentText = jthis.siblings(".commentText").text();
          jthis.parent().append('<div class="expandedContent">' + convertText(commentText) + '</div>');
          jthis.siblings('.expandedContent').slideDown(400);
          jthis.text("隱藏");
        }
        else{
          jthis.siblings('.expandedContent').slideUp(400, function(){$(this).remove()});
          jthis.text("展開");
        }
      }
    );

    $('#replySection button').click(function(){
      if($(this).siblings('input').val() != ''){
        sendComment($(this).siblings('input').val());
        $(this).siblings('input').val("");
      }
    });

    $('#replySection input').keypress(function(e){
      if(e.which == 13 && $(this).val() != ''){
        sendComment($(this).val());
        $(this).val("");
      }
    });
  }
);

var convertText = function(text){
  var component = '';
  if(text.indexOf(".jpg") != -1 || text.indexOf(".jpeg") != -1 || text.indexOf(".png") != -1 || text.indexOf(".gif") != -1) {
    component += '<a href=' + text + '><img src=' + text + '></a>';
  }
  else if(text.indexOf("www.youtube.com") != -1){
    var vid = text.substring(text.indexOf("?v=") + 3, text.length);
    var embedUrl = "https://www.youtube.com/embed/" + vid + "?rel=0";
    component += '<iframe width="560" height="315" src=' + embedUrl + ' frameborder="0" allowfullscreen></iframe>';
  }
  return component;
}

var sendComment = function(text){
  socket.emit('comment', {
    comment: text
  });
  $.post('/comment', {
    topic: $('#issueTitle div').text(),
    comment: text
  });
}
