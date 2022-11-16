const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },

})

const Blog = mongoose.model("blog", BlogSchema);
module.export = Blog;