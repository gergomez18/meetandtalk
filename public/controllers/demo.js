var canvas = document.querySelector('#preview');
var context = canvas.getContext('2d');

canvas.style.display = 'none';
canvas.width = 512;
canvas.height = 384;
context.width = canvas.width;
context.height = canvas.height;

var button = document.querySelector('#button');
var video = document.querySelector('#video');
var socket = io();

function streamCamera(video, context) {
    context.drawImage(video, 0, 0, context.width, context.height);
    socket.emit('stream', canvas.toDataURL('image/webp'));
}

function successCamera(stream) {
    video.srcObject = stream;
    statusCamera('Online');
}

function errorCamera() {
    statusCamera('Offline');
}

function statusCamera(status) {
    document.querySelector('#status').innerText = status;
}

button.addEventListener('click', () => {
    navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msgGetUserMedia);

    if (navigator.getUserMedia) {
        navigator.getUserMedia({video:true}, successCamera, errorCamera);
    }

    var interval = setInterval(() => {
        streamCamera(video, context);
    }, 100);
});
