const { validationResult } = require('express-validator');
const BlogModel = require('../models/blog');
const fs = require("fs");

module.exports = {
    //blog controller Start

    index: (req, res, next) => {
        // blog list
        BlogModel.find((err, docs) => {
            if (err) {
                return res.json({ error: "Something went wrong!" + err })
            }
            // return res.json({ blogs: docs });
            const blogs = [];
            docs.forEach(Element => {
                blogs.push({
                    title: Element.title,
                    details: Element.details,
                    catagory: Element.catagory,
                    date: Element.date,
                    id: Element._id,
                    image: Element.image
                });
            });
            res.render('backend/blog/index', { title: 'Blog List', layout: 'backend/layout', blog: blogs });
        });
    },

    //Blog Create
    create: (req, res, next) =>
        res.render('backend/blog/create', { title: 'Blog Create', layout: 'backend/layout' }),

    //Blog Edit
    edit: (req, res, next) => {
        BlogModel.findById(req.params.id)
            .then((blog) => {
                const details = {
                    title: blog.title,
                    slug: blog.slug,
                    date: blog.date,
                    catagory: blog.catagory,
                    id: blog._id,
                    details: blog.details,
                    image: blog.image
                }
                res.render('backend/blog/edit', { title: 'Blog edit', layout: 'backend/layout', blog: details });
            })
    },

    //Blog Delete
    delete: (req, res, next) => {
        BlogModel.findByIdAndRemove(req.params.id, (err, blog) => {

            if (err) {
                console.log("Could not deleted.");
            }
            // delete file permanantly
            try {
                fs.unlink("public/" + blog.image, () => {
                    console.log("File deleted===================");
                })
            } catch (error) {
                console.log("Something went wrong====================");
            }
        })
        res.redirect("/admin/blog")
        // res.render('index', { title: 'Blog delete', layout: 'backend/layout' }),
    },

    //Blog Show
    show: (req, res, next) => {
        BlogModel.findById(req.params.id)
            .then((blog) => {
                // res.json({ "blog": blog });
                const details = {
                    title: blog.title,
                    details: blog.details,
                    catagory: blog.catagory,
                    image: blog.image
                }
                res.render('backend/blog/show', { title: 'Blog Show', layout: 'backend/layout', blog: details });
            })
            .catch((err) => {
                res.json({ "error": "Something went wrong" });
            })
    },

    //Blog Store
    store: (req, res, next) => {
        // Data Validiation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({ errors: errors.mapped() });
        }

        let sampleFile;
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.');
        }

        // The name of the input field (i.e. "sampleFile") is used to retrive the uploaded file
        sampleFile = req.files.image;
        let rnd = new Date().valueOf();
        let filePath = 'upload/' + rnd + sampleFile.name;

        // Use the mv() method to place the file somewhere on your server

        sampleFile.mv('public/' + filePath, function (err) {
            if (err)
                //     return res.status(500).send(err);

                res.send('File Uploaded!');
                res.redirect("/admin/blog")
        });


        // Send data to Database
        const blog = new BlogModel({
            title: req.body.title,
            slug: req.body.slug,
            catagory: req.body.catagory,
            date: req.body.date,
            details: req.body.details,
            image: filePath
        });

        blog.save((err, newBlog) => {
            if (err) {
                return res.json({ error: "Something went wrong!" + err })
            }
            // return res.json({ blog: newBlog });
        });

        // return res.json(req.body);

        // res.render('backend/blog/store', { title: 'Blog Store', layout: 'backend/layout' });
    },

    //Blog Update
    update: (req, res, next) => {
        const errors=validationResult(req);

        if(!errors.isEmpty()){
            return res.json({errors:errors.mapped()});
        }
        let sampleFile,filePath;

        if (req.files) {
            // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
            sampleFile = req.files.image;
            let rnd=new Date().valueOf();
            filePath='upload/' +rnd+sampleFile.name;
            // Use the mv() method to place the file somewhere on your server
            sampleFile.mv('public/'+filePath, function(err) {
                if (err)
                res.redirect("/admin/blog/"+req.params.id+"/edit");
            });
        }
        const blogObj={
            title:req.body.title,
            slug:req.body.slug,
            details:req.body.details,
            catagory:req.body.catagory,
            date:req.body.date
        };

        if(filePath){
            blogObj.image=filePath;
        }

        // /
        BlogModel.findByIdAndUpdate(req.params.id,blogObj,(err,blog)=>{
            if(err){
                res.redirect("/admin/blog/"+req.params.id+"/edit");
            }
            res.redirect("/admin/blog");
        });

    }
    //blog controller End

}