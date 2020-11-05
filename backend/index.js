
let app = require('express')();
let server = app.listen(3000);
let io = require('socket.io').listen(server);


io.on('connection', (socket) => {
  console.log("Connected");

  socket.on('disconnect', () => {
    console.log("A user disconnected");
  });

  socket.on('displayAnimation', (data) => {
    console.log(data);
    io.sockets.emit('displayAnimation', data);
  });

});