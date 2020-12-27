
const socket = io('ws://localhost:3000');
const peer = new Peer(undefined, {
  path: '/peerjs',
  host: '/',
  port: '3030'
});
const peers = {};
const video = document.createElement('video');
let streaming;

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
    socket.on('user-connected', userId => {
        const call = peer.call(userId, stream);
        const video = document.createElement('video');
        call.on('stream', userVideoStream => {
            addVideoToStreaming(video, userVideoStream);
        });
        call.on('close', () => {
            video.remove();
        });
        peers[userId] = call;
    });
    socket.on('createMessage', message => {
        $('ul').append('<li class="message"><b>User:</b><br/>' + message + '</li>');
        $('.main__chat_window').scrollTop($('.main__chat_window').prop("scrollHeight"));
    });
    peer.on('call', call => {
        call.answer(stream);
        const video = document.createElement('video');
        call.on('stream', userVideoStream => {
            addVideoToStreaming(video, userVideoStream);
        });
    });
    addVideoToStreaming(video, stream);
    streaming = stream;
    $('html').keydown(function (e) {
        if (e.which == 13 && $('input').val().length !== 0) {
            socket.emit('message', $('input').val());
            $('input').val('');
        }
    });
});

socket.on('user-disconnected', userId => {
    if (peers[userId]) {
        peers[userId].close()
    }
});

peer.on('open', id => {
    socket.emit('join-room', ROOM_ID, id);
});

function addVideoToStreaming(video, stream) {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play();
    })
    document.getElementById('video-grid').append(video);
}

const muteUnmute = () => {

    if (streaming.getAudioTracks()[0].enabled) {
        streaming.getAudioTracks()[0].enabled = false;
        document.querySelector('.main__mute_button').innerHTML = '<i class="unmute fas fa-microphone-slash"></i><span>Unmute</span>';
    } else {
        streaming.getAudioTracks()[0].enabled = true;
        document.querySelector('.main__mute_button').innerHTML = '<i class="fas fa-microphone"></i><span>Mute</span>';
    }
}

const playStop = () => {

    if (streaming.getVideoTracks()[0].enabled) {
        streaming.getVideoTracks()[0].enabled = false;
        document.querySelector('.main__video_button').innerHTML = '<i class="stop fas fa-video-slash"></i><span>Play Video</span>';
    } else {
        streaming.getVideoTracks()[0].enabled = true;
        document.querySelector('.main__video_button').innerHTML = '<i class="fas fa-video"></i><span>Stop Video</span>';
    }
}
