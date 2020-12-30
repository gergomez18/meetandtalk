var video = document.querySelector('#video');
var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');
var socket = io();

canvas.style.display = 'none';
canvas.width = 512;
canvas.height = 384;
context.width = canvas.width;
context.height = canvas.height;
navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msgGetUserMedia);

navigator.getUserMedia({
    video: true,
    audio: false
}, successCamera, errorCamera);

var interval = setInterval(() => {
    streamCamera(video, context);
}, 30);

function streamCamera(video, context) {
    context.drawImage(video, 0, 0, context.width, context.height);
    socket.emit('stream', canvas.toDataURL('image/webp'));
}

function successCamera(stream) {
    video.srcObject = stream;
}

function errorCamera() {

}
