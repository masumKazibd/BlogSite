const { check } = require('express-validator');

exports.store = [
    check('icon', "Invalid icon").not().isEmpty().trim(),
    check('title', "Invalid title").not().isEmpty().trim(),
    check('details', "Invalid details").not().isEmpty().trim(),
];

exports.update = [
    check('icon', "Invalid icon").not().isEmpty().trim(),
    check('title', "Invalid title").not().isEmpty().trim(),
    check('details', "Invalid details").not().isEmpty().trim(),
];