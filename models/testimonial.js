const mongoose = require("mongoose");

const TestimonialSchema = new mongoose.Schema({
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

const Testimonial = mongoose.model("blog", TestimonialSchema);
module.export = Testimonial;