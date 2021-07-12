const router = require('express').Router();
const mongoose = require('mongoose');

// Send email to database
router.get('/', async (req, res) => {

    mongoose.connection.db.collection("portfolio_projects", (err, collection) => {
        collection.find({}).toArray((err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.send(data);
            }
        
        })
    });
});

module.exports = router;