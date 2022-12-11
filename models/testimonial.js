const mongoose = require("mongoose");

const TestimonialSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    designation: {
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

const Testimonial = mongoose.model("testimonial", TestimonialSchema);
module.export = Testimonial;