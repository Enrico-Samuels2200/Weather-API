const router = require('express').Router();
const mongoose = require('mongoose');

// Send email to database
router.get('/', async (req, res) => {
    mongoose.connection.db.collection("portfolio_projects", function (err, collection) {
        collection.find({}).toArray(function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send(data);
            }
        
        })
    });
});

module.exports = router;