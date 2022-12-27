const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    catagory: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },

})

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;