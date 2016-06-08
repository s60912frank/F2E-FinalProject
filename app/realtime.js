module.exports = function(io){
  io.on('connection', function(socket){
    if(socket.request.user.logged_in){
      console.log(socket.request.user.name + " connected to socket!");
    }
    else{
      console.log("A guest connected to socket!");
    }

    socket.on('topic', function(data){
      socket['topic'] = data.topic;
      socket.join(data.topic);
    });

    socket.on('comment', function(data){
      if(socket.request.user.logged_in){
        data['time'] = new Date();
        io.sockets.in(socket.topic).emit('comment', data);
      }
    });

    socket.on('nickNameChanged', function(data){
      if(socket.request.user.logged_in){
        io.sockets.in(socket.topic).emit('nickNameChanged', data);
        console.log("NICK NICK!");
      }
    });
  });
}
