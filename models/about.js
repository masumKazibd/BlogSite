const mongoose = require("mongoose");

const AboutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    designaition: {
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

const About = mongoose.model("about", AboutSchema);
module.export = About;