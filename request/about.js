const { check } = require('express-validator');

exports.store = [
    check('image1', "Invalid image1"),
    check('history', "Invalid history").not().isEmpty().trim(),
    check('image2', "Invalid image2"),
    check('mission', "Invalid mission").not().isEmpty().trim()
];

// exports.update = [
//     check('image1', "Invalid image1"),
    // check('history', "Invalid history").not().isEmpty().trim(),
    // check('image2', "Invalid image2"),
    // check('mission', "Invalid mission").not().isEmpty().trim()
// ];