const { Router } = require('express');
const router = Router();

router.get('/demo', (request, response) => {
    response.render('demo.html');
});

module.exports = router;
