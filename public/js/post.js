$(document).ready(function(){
  $('#submit').click(function(){
    $.post('/addTopic', {
      name: $('#createTitle input').val(),
      category: $('#category select :selected').text(),
      desc: $('#discribeContent textarea').val(),
      opinion: $('#opinion textarea').val()
    });
  });
});
