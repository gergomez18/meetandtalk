const { Router } = require('express');
const router = Router();

router.get('/', (request, response) => {
    response.redirect('login.html');
});

router.get('/login', (request, response) => {
    response.redirect('login.html');
});

router.get('/signup', (request, response) => {
    response.redirect('signup.html');
});

router.get('/profile', (request, response) => {
    response.redirect('profile.html');
});

router.get('/profile/coins', (request, response) => {
    response.redirect('coins.html');
});

router.get('/profile/friends', (request, response) => {
    response.redirect('friends.html');
});

router.get('/profile/record', (request, response) => {
    response.redirect('record.html');
});

router.get('/profile/notifications', (request, response) => {
    response.redirect('notifications.html');
});

router.get('/profile/settings', (request, response) => {
    response.redirect('settings.html');
});

router.get('/profile/works', (request, response) => {
    response.redirect('works.html');
});

router.get('/profile/balance', (request, response) => {
    response.redirect('balance.html');
});

router.get('/meet', (request, response) => {
    response.redirect('meet.html');
});

router.get('/meet/random', (request, response) => {
    response.redirect('random.html');
});

router.get('/meet/stories', (request, response) => {
    response.redirect('stories.html');
});

router.get('/meet/models', (request, response) => {
    response.redirect('models.html');
});

router.get('/chats', (request, response) => {
    response.redirect('chats.html');
});

router.get('/chats/room/write', (request, response) => {
    response.redirect('write.html');
});

router.get('/chats/room/video', (request, response) => {
    response.redirect('video.html');
});

router.get('/preview', (request, response) => {
    response.redirect('preview.html');
});

router.get('/about', (request, response) => {
    response.redirect('about.html');
});

router.get('/terms', (request, response) => {
    response.redirect('terms.html');
});

router.get('/privacy', (request, response) => {
    response.redirect('privacy.html');
});

router.get('/demo', (request, response) => {
    response.redirect('demo.html');
});

module.exports = router;
