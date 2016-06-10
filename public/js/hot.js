d3.json('/hotTopics', function(err, data){
  if(!err && data){
    DrawHotTopic(data);
  }
});

var DrawHotTopic = function(data){
  var dataobj = { children: data };
  var pack = d3.layout.pack();
  pack = pack.padding(1).size([800,600]);
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
