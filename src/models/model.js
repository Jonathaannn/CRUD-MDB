const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    titulo: String,
    corpo: String,
    autor: String,
    data: {
        type: Date,
        default: Date.now
    }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post