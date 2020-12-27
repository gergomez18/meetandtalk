
const express = require('express');
const app = express();
const server = require('http').Server(app);
const { v4: uuidV4 } = require('uuid');
// const io = require('socket.io')(server);
// const { ExpressPeerServer } = require('peer');
// const peerServer = ExpressPeerServer(server, { debug: true });

app.use(express.static('assets'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => { res.render('landingPage'); });
app.get('/login', (req, res) => { res.render('login'); });
app.get('/signup', (req, res) => { res.render('signup'); });
app.get('/profile', (req, res) => { res.render('profile'); });
app.get('/profile/coins', (req, res) => { res.render('profileCoins'); });
app.get('/profile/friends', (req, res) => { res.render('profileFriends'); });
app.get('/profile/record', (req, res) => { res.render('profileRecord'); });
app.get('/profile/notifications', (req, res) => { res.render('profileNotifications'); });
app.get('/profile/settings', (req, res) => { res.render('profileSettings'); });
app.get('/profile/works', (req, res) => { res.render('profileWorks'); });
app.get('/profile/balance', (req, res) => { res.render('profileBalance'); });
app.get('/meet', (req, res) => { res.render('meet'); });
app.get('/meet/random', (req, res) => { res.render('meetRandom'); });
app.get('/meet/stories', (req, res) => { res.render('meetStories'); });
app.get('/meet/models', (req, res) => { res.render('meetModels'); });
app.get('/chats', (req, res) => { res.render('chats'); });
app.get('/chats/room/write', (req, res) => { res.render('chatsWriteRoom'); });
app.get('/chats/room/video', (req, res) => { res.render('chatsVideoRoom'); });
app.get('/demo', (req, res) => { res.redirect('/demo/' + uuidV4()); });
app.get('/demo/:token', (req, res) => { res.render('demo', { roomId: req.params.room }); });
// app.use('/peerjs', peerServer);

// io.on('connection', socket => {
//     socket.on('join-room', (roomId, userId) => {
//         socket.join(roomId);
//         socket.to(roomId).broadcast.emit('user-connected', userId);
//         socket.on('message', (message) => {
//             io.to(roomId).emit('createMessage', message);
//         });
//         socket.on('disconnect', () => {
//             socket.to(roomId).broadcast.emit('user-disconnected', userId);
//         });
//     });
// });

server.listen(3030);
