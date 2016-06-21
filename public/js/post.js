$(document).ready(function(){
  $('#submit').click(function(){
    var title = $('#createTitle input').val();
    var categoryVal = $('#category select :selected').text();
    var descVal = $('#discribeContent textarea').val();
    var opinionVal = $('#opinion textarea').val();
    if(title != '' && descVal != '' && opinionVal != ''){
      $.post('/addTopic', {
        name: title,
        category: categoryVal,
        desc: descVal,
        opinion: opinionVal
      }, function(){
        alert("主題發表成功，將自動跳轉");
        window.location = "/issue?title=" + title;
      });
    }
  });
});
