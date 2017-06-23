var express = require('express');
var app = require('express')();
var http = require('http').Server(app);

var io = require('socket.io')(http);

io.on('connection', function (socket) {
  console.log("user connected");
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
  socket.on('chat message', function (message) {
    console.log('Message received ' + message);
    io.emit('chat message', message);
  });
});

app.use(express.static(__dirname + '/public'));

http.listen(3000, function () {
  console.log('listening on *:3000');
});