const { check } = require('express-validator');

exports.store = [
    check('title', "Invalid title").not().isEmpty().trim(),  
    check('designation', "Invalid designation").not().isEmpty().trim(),
    check('biography', "Invalid biography").not().isEmpty().trim(),
    check('image', "Invalid image")
];

exports.store = [
    check('title', "Invalid title").not().isEmpty().trim(),  
    check('designation', "Invalid designation").not().isEmpty().trim(),
    check('biography', "Invalid biography").not().isEmpty().trim(),
    check('image', "Invalid image")
];