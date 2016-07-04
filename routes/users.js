var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});


router.get('/profile',
    require('connect-ensure-login').ensureLoggedIn(),
    function(req, res) {
        res.json({
            user: req.user
        });
    });

module.exports = router;
