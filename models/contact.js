const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
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

const Contact = mongoose.model("Contact", ContactSchema);
module.export = Contact;