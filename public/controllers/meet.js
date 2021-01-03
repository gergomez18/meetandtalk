var video = document.querySelector('#video');

navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msgGetUserMedia);

navigator.getUserMedia({
    video: true,
    audio: false
}, successCamera, errorCamera);

function successCamera(stream) {
    video.srcObject = stream;
}

function errorCamera() { }
