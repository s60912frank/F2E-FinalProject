$(document).ready(function(){
  $('#addTopic').click(function(){
    $.post('/addTopic', { name: $('#topicText').val() }, function(){
      //alert("Topic added successfully");
      location.reload();
    });
  });

  $('#changeNickname').click(function(){
    $.post('/changeNickname', { nickname: $('#nicknameText').val() }, function(){
      //alert("Topic added successfully");
      location.reload();
    });
  });

  $('#search').click(function(){
    window.location = '/search?text=' + $('#searchText').val();
  });

  $('#logout').click(function(){
    $.get('/logout', function(){
      location.reload();
    });
  });
});
