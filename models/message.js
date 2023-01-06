const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    
    icon: {
        type: String,
        required: true,
    },

    title: {
        type: String,
        required: true,
    },
    
    details: {
        type: String,
        required: true,
    },
})

const message = mongoose.model("message", messageSchema);
module.exports = message;