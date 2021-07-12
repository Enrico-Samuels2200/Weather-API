const router = require('express').Router();
const verify = require('../routes/verifyToken');

router.get('/', verify, (req, res) => {
    res.json({
        posts: {
            title: "Baller killer!",
            description: 'Grove street!'
        }
    });
});

module.exports = router;