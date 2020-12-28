const express = require('express');
const app = express();
const http = require('http').Server(app);
const socket = require('socket.io')(http);

app.use(require('./router'));
app.use(express.static(__dirname + '/public/assets/css'));
app.use(express.static(__dirname + '/public/assets/images'));
app.use(express.static(__dirname + '/public/controllers'));
app.use(express.static(__dirname + '/public/models'));
app.use(express.static(__dirname + '/public/views'));
app.use(express.static(__dirname + '/demo'));

socket.on('connection', (socket) => {
    socket.on('stream', (image) => {
        socket.broadcast.emit('stream', image);
    });
});

module.exports = http;
