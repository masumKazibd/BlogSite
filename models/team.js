const mongoose = require("mongoose");

module.exports = mongoose.model("Team", new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    biography: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },

})
);