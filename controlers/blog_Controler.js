const {validationResult} = require('express-validator');
const BlogModel = require('../models/blog');

module.exports = {
    //blog controller Start

    index: (req, res, next) => {
        //blog list
        BlogModel.find((err, docs) => {
            if (err) {
                return res.json({ error: "Something went wrong!" + err })
            }
            return res.json({ blogs: docs });
        });
        res.render('backend/blog/index', { title: 'Blog', layout: 'backend/layout' });
    },

    //Blog Create
    create: (req, res, next) =>
        res.render('backend/blog/create', { title: 'Blog Create', layout: 'backend/layout' }),

    edit: (req, res, next) =>
        res.render('index', { title: 'Blog edit', layout: 'backend/layout' }),

    delete: (req, res, next) =>
        res.render('index', { title: 'Blog delete', layout: 'backend/layout' }),
    show: (req, res, next) =>
        res.render('index', { title: 'Blog show', layout: 'backend/layout' }),
    //Blog Store
    store: (req, res, next) =>
        res.render('index', { title: 'Blog Store', layout: 'backend/layout' }),

    update: (req, res, next) =>
        res.render('index', { title: 'Update Blog', layout: 'backend/layout' })
    //blog controller End

}