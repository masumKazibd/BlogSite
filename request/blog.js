const { check } = require('express-validator');

export.store=[
    check('title', "Invalid title".isEmpty() .not() .trim()),
    check('details', "Invalid title".isEmpty),
    check('image', "Invalid image".isEmpty),

    // check('password', "Invalid Password")
    // .isLength({ min: 5})
    // .withMessage('must be at least 5 chars long')
    // .matches(/\d[a-zA-Z]/)
    // .withMessage()
]

export.update=[
    check('title', "Invalid title".isEmpty)
    // check('password', "Invalid Password")
    // .isLength({ min: 5})
    // .withMessage('must be at least 5 chars long')
    // .matches(/\d[a-zA-Z]/)
    // .withMessage()
]
