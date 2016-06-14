var isInputOpen = false;
var windowWidth = $(window).width() > 1280 ? 1280 : $(window).width();
var hotTopicData;
$(document).ready(
  function(){
    shrinkNavBar($(window).scrollTop());
    $(window).scroll(function (event){
      var pos = $(window).scrollTop();
      /*console.log(pos);
      if(pos > 200){
        shrinkNavBar();
      }*/
      if(pos <= 200){
        shrinkNavBar(pos);
      }
    });

    $(window).resize(function(){
      windowWidth = $(window).width() > 1280 ? 1280 : $(window).width();
      $("svg").css('height', windowWidth);
      $("svg")[0].setAttribute('viewBox', '0 0 ' + windowWidth + ' ' + windowWidth);
      DrawHotTopic();
    });

    $('#searchIcon').click(function(){
      if($(window).width() < 768 && !isInputOpen){
        $('#searchInput').css('margin-right', -$('#searchInput').width());
        $('#searchInput').show();
        $('#logo').animate({ 'margin-left': -$('#logo').width() }, 200);
        $('#searchInput').animate({ 'margin-right': '0px' }, 200);
        isInputOpen = true;
      }
      else{
        var searchText = $('#searchInput').val();
        if(searchText != ""){
          window.location = '/search?text=' + $('#searchInput').val();
        }
        else{
          //do something
        }
      }
    });

    $(document).click(function(e){
      if(isInputOpen && e.target.id != 'searchInput' && e.target.id != 'searchIcon'){
        $('#logo').animate({ 'margin-left': 0 }, 200);
        $('#searchInput').animate({ 'margin-right': -$('#searchInput').width() }, 200, function(){
          $('#searchInput').val("");
          $(this).hide();
        });
        isInputOpen = false;
      }
    });
  }
);

/*var shrinkNavBar = function(){
  $('#navbar').animate({
    backgroundColor: 'rgba(0,255,0,0.4)',
    height: 50,
    opacity: 0
  }, 300);
  $('.dynMarginTop').animate({ "margin-top": 12.5 }, 300);
}*/

d3.json('/hotTopics', function(err, data){
  if(!err && data){
    $("svg").css('height', windowWidth);
    $("svg")[0].setAttribute('viewBox', '0 0 ' + windowWidth + ' ' + windowWidth);
    hotTopicData = data;
    DrawHotTopic();
  }
});

var DrawHotTopic = function(){
  d3.select("svg").html("");
  var dataobj = { children: hotTopicData };
  var pack = d3.layout.pack();
  pack = pack.padding(1).sort(function(a,b) { b.value - a.value; }).size([ windowWidth, windowWidth ]);
  var nodes = pack.nodes(dataobj);
  nodes = nodes.filter(function(it) { return it.parent; });
  var color = d3.scale.category20();
  d3.select("svg").selectAll("a").data(nodes).enter()
    .append('a').attr('href',function(it) { return it.link; })
    .append("circle").attr({
      cx: function(it) { return it.x; },
      cy: function(it) { return it.y; },
      r : function(it) { return it.r; },
      fill: function(it) { return color(it.value); }
    });

  d3.select("svg").selectAll("a").data(nodes)
    .append("text").attr({
      "font-size": function(it){
        var fullWidthCharArr = it.title.match(/[^\x00-\xff]/g);
        var fullWidthCharCount = 0;
        if(fullWidthCharArr){
          var fullWidthCharCount = fullWidthCharArr.length;
        }
        var halfWidthCharCount = it.title.length - fullWidthCharCount;
        var titleWidth = fullWidthCharCount + halfWidthCharCount * 0.5;
        return it.r * 2 / titleWidth;
      },
      x: function(it) { return it.x; },
      y: function(it) { return it.y + d3.select(this).attr("font-size") * 0.33; },
      "text-anchor": "middle"
    }).text(function(it) { return d3.select(this).attr("font-size") < 12 ? "":it.title; });
}

var shrinkNavBar = function(pos){
  if(pos > 200) pos = 200;
  var color = 'rgba(255, 255, 255,' + pos / 220 + ')';
  $('#navbar').css('background-color', color);
  $('#navbar').css('height', 50 * ((200 - pos) / 200) + 50);
  $('.dynMarginTop').css('margin-top', 13 * (200 - pos) / 200 + 12);
}
