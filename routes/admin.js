const express = require('express');
const router = express.Router();
const verify = require('./verifyToken');

// Opens "models/post.js"
const postModel = require('../models/post');

router.get('/', verify, async (req, res) => {
    try {
        const posts = await postModel.find();
        res.json(posts);
    }
    catch(err) {
        res.json({message:err});
    };
});

// Submits a post
router.post('/', verify, async (req, res) => {
    const post_contain = new postModel({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        hosted: req.body.hosted
    });

    // Returns a promise
    try{
        const savePost = await post_contain.save();
        res.json(savePost);
    }
    catch(err) {
        res.json({message: err});
    };
});

// Delete Post
router.delete('/:postId', async (req, res) => {
    try {
        const removePost = await postModel.remove({_id:req.params.postId});
        res.json(removePost);
    }
    catch(err) {
        res.json({message:err});
    }
});

// Update Post
router.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await postModel.updateOne(
            {_id: req.params.postId}, 
            {$set: {title: req.body.title}}
        );
        res.json(updatePost);
    }
    catch(err) {
        res.json({message:err});
    }
});

// Exports the routes as a package.
module.exports = router;