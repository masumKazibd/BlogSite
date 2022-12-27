const { check } = require('express-validator');

exports.store = [
    check('title', "Invalid title").not().isEmpty().trim(),
    check('slug', "Invalid slug").not().isEmpty().trim(),
    check('catagory', "Invalid catagory").not().isEmpty().trim(),
    check('date', "Invalid date").isDate(),
    check('details', "Invalid details").not().isEmpty().trim(),
    check('image', "Invalid image")
];

exports.update = [
    check('title', "Invalid title").not().isEmpty().trim(),
    check('slug', "Invalid slug").not().isEmpty().trim(),
    check('catagory', "Invalid catagory").not().isEmpty().trim(),
    check('date', "Invalid date").isDate(),
    check('details', "Invalid title").not().isEmpty().trim(),
    check('image', "Invalid image")
];