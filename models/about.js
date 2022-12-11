const mongoose = require("mongoose");

const AboutSchema = new mongoose.Schema({
    image1: {
        type: String,
        required: false,
    },
    history: {
        type: String,
        required: true,
    },
    image2: {
        type: String,
        required: false,
    },
    
    mission: {
        type: String,
        required: true,
    },
})

const About = mongoose.model("about", AboutSchema);
module.exports = About;