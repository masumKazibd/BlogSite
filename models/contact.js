const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    
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

const Contact = mongoose.model("Contact", ContactSchema);
module.exports = Contact;