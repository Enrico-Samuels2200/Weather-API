const mongoose = require('mongoose');

// Schema
const ProjectDetailsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    hosted: {
        type: Boolean,
        required: true
    }
});

const PostTestSchema = mongoose.Schema({
    title: String,
    description: String
    
});


module.exports = mongoose.model('Post', ProjectDetailsSchema);