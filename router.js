const { Router } = require('express');
const router = Router();

router.get('/demo', (request, response) => {
    response.redirect('demo.html');
});

module.exports = router;
