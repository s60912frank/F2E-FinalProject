$(document).ready(
  function(){
    var socket = io('http://localhost:8080');
    socket.emit('topic', { topic: $('#issueTitle div').text() });
    socket.on('comment', function(data){
      var component = '<span class="commentBy">' + data.name + '</span>';
      var time = new Date(data.time);
      var timeString = (time.getMonth() + 1) + '/' + time.getDate() + ' ' + time.getHours() + ":" + time.getMinutes();
      if(data.comment.indexOf(".jpg") != -1 || data.comment.indexOf(".jpeg") != -1 || data.comment.indexOf(".png") != -1 || data.comment.indexOf(".gif") != -1) {
        component += ':' + '<a href=' + data.comment + '><img src=' + data.comment + ' style="max-width: 400px"></a>@' + timeString;
      }
      else if(data.comment.indexOf("www.youtube.com") != -1){
        var text = data.comment;
        var vid = text.substring(text.indexOf("?v=") + 3, text.length);
        var embedUrl = "https://www.youtube.com/embed/" + vid + "?rel=0";
        component += ':' + '<iframe width="560" height="315" src=' + embedUrl + ' frameborder="0" allowfullscreen></iframe>@' + timeString;
      }
      else {
        component += ':' + data.comment + "@" + timeString;
      }
      //alert(component);
      $('#commentList').prepend('<li>' + component + '</li>');
    });
    socket.on('nickNameChanged', function(data){
      $('#commentList').children($('<li>')).each(function(){
        if($(this).children('.commentBy').text() == data.from){
          $(this).children('.commentBy').text(data.to);
        }
      });
    });

    //點按鈕展開!
    $('.expand').click(
      function(){
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
