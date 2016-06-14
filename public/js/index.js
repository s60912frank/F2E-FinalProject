var isInputOpen = false;
$(document).ready(
  function(){
    shrinkNavBar($(window).scrollTop());
    $(window).scroll(function (event){
      var pos = $(window).scrollTop();
      /*console.log(pos);
      if(pos > 200){
        shrinkNavBar();
      }*/
      if(pos <= 400){
        shrinkNavBar(pos);
      }
    });

    $('#searchIcon').click(function(){
      if($(window).width() < 768 && !isInputOpen){
        $('#searchInput').css('margin-right', -$('#searchInput').width());
        $('#searchInput').show();
        $('#logo').animate({ 'margin-left': -$('#logo').width() }, 200);
        $('#searchInput').animate({ 'margin-right': '0px' }, 200);
        isInputOpen = true;
      }
      else if(isInputOpen){
        var searchText = $('#searchInput').val();
        if(searchText != ""){
          window.location = '/search?text=' + $('#searchInput').val();
        }
        else{
          //do something
        }
      }
    });

    $('#searchInput').focusout(function(){
      if(isInputOpen){
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
    var svgWidth = $(window).width() > 1280 ? 1280 : $(window).width();
    $("svg").css('height', $(window).height());
    $("svg")[0].setAttribute('viewBox', '0 0 ' + svgWidth + ' ' + $(window).height());
    DrawHotTopic(data);
  }
});

var DrawHotTopic = function(data){
  var dataobj = { children: data };
  var pack = d3.layout.pack();
  pack = pack.padding(1).sort(function(a,b) { b.value - a.value; }).size([ $(window).width() > 1280 ? 1280 : $(window).width() ,$(window).height()]);
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
      x: function(it) { return it.x; },
      y: function(it) { return it.y - 12; },
      "text-anchor": "middle",
    }).text(function(it) { return it.title; });

  d3.select("svg").selectAll("a").data(nodes)
    .append("text")
    .attr({
      x: function(it) { return it.x; },
      y: function(it) { return it.y + 12; },
      "text-anchor": "middle",
    }).text(function(it) { return it.value; });
}

var shrinkNavBar = function(pos){
  if(pos > 400) pos = 400;
  var color = 'rgba(255, 255, 255,' + pos / 500 + ')';
  $('#navbar').css('background-color', color);
  $('#navbar').css('height', 50 * ((400 - pos) / 400) + 50);
  $('.dynMarginTop').css('margin-top', 13 * (400 - pos) / 400 + 12);
}
