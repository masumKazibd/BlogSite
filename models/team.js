const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
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

const Team = mongoose.model("blog", TeamSchema);
module.export = Team;