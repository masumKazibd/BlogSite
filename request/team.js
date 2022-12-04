const { check } = require('express-validator');

exports.store = [
    check('name', "Invalid name").not().isEmpty().trim(),  
    check('designation', "Invalid designation").not().isEmpty().trim(),
    check('biography', "Invalid biography").not().isEmpty().trim(),
    check('image', "Invalid image")
];

// exports.update = [
//     check('title', "Invalid title").not().isEmpty().trim(),
//     check('slug', "Invalid slug".not().isEmpty().trim()),
//     check('details', "Invalid title".not().isEmpty().trim()),
//     check('image', "Invalid image")
// ];