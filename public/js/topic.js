$(document).ready(function(){
  var socket = io('http://localhost:8080');
  socket.emit('topic', { topic: $('#topicTitle').text() });
  socket.on('comment', function(data){
    var component = '<span class="commentBy">' + data.name + '</span>';
    var time = new Date(data.time);
    var timeString = time.getFullYear() + '/' + (time.getMonth() + 1) + '/' + time.getDate() + ' ' + time.getHours() + ":" + time.getMinutes();
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


  $('#changeNickname').click(function(){
    socket.emit('nickNameChanged', {
      from: $('#nickname').text(),
      to: $('#nicknameText').val()
    });
    $('#nickname').text($('#nicknameText').val());
    $.post('/changeNickname', { nickname: $('#nicknameText').val() }, function(){
      //alert("Topic added successfully");
      location.reload();
    });
  });

  $('.sendComment').click(function(){
    socket.emit('comment', {
      name: $('#nickname').text(),
      comment: $(this).siblings('.commentText').val(),
      time: new Date()
    });
    $.post('/comment', {
      topic: $('#topicTitle').text(),
      comment: $(this).siblings('.commentText').val()
    }, function(){
      //alert("Comment added successfully");
    });
    //location.reload();
  });

  $('#logout').click(function(){
    $.get('/logout', function(){
      location.reload();
    });
  });
});
