const { validationResult } = require('express-validator');
const BlogModel = require('../models/blog');

module.exports = {
    //blog controller Start

    index: (req, res, next) => {
        res.render('backend/blog/index', { title: 'Blogs', layout: 'backend/layout' });
    },

    //Blog Create
    create: (req, res, next) =>
        res.render('backend/blog/create', { title: 'Blog Create', layout: 'backend/layout' }),

    //Blog Edit
    edit: (req, res, next) =>
        res.render('index', { title: 'Blog edit', layout: 'backend/layout' }),

    //Blog Delete
    delete: (req, res, next) =>
        res.render('index', { title: 'Blog delete', layout: 'backend/layout' }),

    //Blog Show
    show: (req, res, next) => {
        BlogModel.find((err,docs)=>{
            if(err){
                return res.json({error:"Something went wrong!"+err})
            }
            return res.json({blogs:docs});
        })
        // res.render('index', { title: 'Blog show', layout: 'backend/layout' }),
    },
    //Blog Store
    store: (req, res, next) => {
        // Data Validiation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({ errors: errors.mapped() });
        }
        // Send data to Database
        const blog = new BlogModel({
          title: req.body.title,
          slug: req.body.slug,
          details: req.body.details,
          image: req.body.image
        });

        blog.save((err,newBlog)=>{
            if(err){
              return res.json({error:"Something went wrong!"+err})
            }
            return res.json({blog:newBlog});
        });

        // return res.json(req.body);
        // res.render('backend/blog/store', { title: 'Blog Store', layout: 'backend/layout' });
    },

    //Blog Update
    update: (req, res, next) =>
        res.render('index', { title: 'Update Blog', layout: 'backend/layout' })
    //blog controller End

}