// const mongoose = require("mongoose");

// module.exports = mongoose.model("Team", new mongoose.Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     designation: {
//         type: String,
//         required: true,
//     },
//     biography: {
//         type: String,
//         required: true,
//     },
//     image: {
//         type: String,
//         required: true,
//     },

// })
// );

const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
    title: {
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
        required: false,
    },

})

const Team = mongoose.model("team", TeamSchema);
module.exports = Team;