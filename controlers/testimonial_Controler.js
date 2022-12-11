const { validationResult } = require('express-validator');
const TestimonialModel = require('../models/testimonial');

module.exports = {
    //testimonial controller

    testimonialIndex: (req, res, next) =>{
        TestimonialModel.find((err, docs) => {
            if (err) {
                return res.json({ error: "Something Went Wrong" + err })
            }
            // return res.json({ testimonials: docs });

            const testimonials = [];
            docs.forEach(Element => {
                testimonials.push({
                    title: Element.title,
                    designation: Element.designation,
                    details: Element.details,
                    id: Element._id,
                    image: Element.image
                });
            });
            res.render('backend/testimonial/index', { title: 'List of testimonial', layout: 'backend/layout', testimonial: testimonials })
        });
    },

    testimonialCreate: (req, res, next) =>
        res.render('backend/testimonial/create', { title: 'Testimonial Create', layout: 'backend/layout' }),

    testimonialEdit: (req, res, next) =>{
        TestimonialModel.findById(req.params.id)
            .then((testimonial) => {
                const details = {
                    title: testimonial.title,
                    designation: testimonial.designation,
                    details: testimonial.details,
                    id: testimonial._id,
                    image: testimonial.image
                }
                res.render('backend/testimonial/edit', { title: 'Edit Testimonial', layout: 'backend/layout', testimonial: details });
            })
    },
    testimonialDelete: (req, res, next) =>{
        TestimonialModel.findByIdAndRemove(req.params.id, (err, testimonial) => {

            if (err) {
                console.log("Could not deleted.");
            }
            // delete file permanantly
            try {
                fs.unlink("public/" + testimonial.image, () => {
                    console.log("File deleted===================");
                })
            } catch (error) {
                console.log("Something went wrong====================");
            }
        })
        res.redirect("/admin/testimonial")
        // res.render('backend/testimonial/delete', { title: 'Testimonial delete', layout: 'backend/layout' }),
    },
    testimonialShow: (req, res, next) =>{
        TestimonialModel.findById(req.params.id)
            .then((testimonial) => {
                // res.json({ "blog": blog });
                const details = {
                    title: testimonial.title,
                    designation: testimonial.designation,
                    details: testimonial.details,
                    image: testimonial.image
                }
                res.render('backend/testimonial/show', { title: 'Testimonial Show', layout: 'backend/layout', testimonial: details })
            })
            .catch((err) => {
                res.json({ "error": "Something went wrong" });
            })
    },
    testimonialStore: (req, res, next) =>  {
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
            // res.redirect("/admin/testimonial")
        });

        const testimonial = new TestimonialModel({
            title: req.body.title,
            designation: req.body.designation,
            details: req.body.details,
            image: filePath
        });

        // Send data to Database

        testimonial.save((err, newTestimonial) => {
            if (err) {
                return res.json({ error: "Something went wrong!" + err })
            }
            // return res.json({ testimonial: newTestimonial });
        });
    },
    testimonialUpdate: (req, res, next) =>{
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.json({ errors: errors.mapped() });
        }
        let sampleFile, filePath;

        if (req.files) {
            // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
            sampleFile = req.files.image;
            let rnd = new Date().valueOf();
            filePath = 'upload/' + rnd + sampleFile.name;
            // Use the mv() method to place the file somewhere on your server
            sampleFile.mv('public/' + filePath, function (err) {
                if (err)
                    res.redirect("/admin/testimonial/" + req.params.id + "/edit");
            });
        }
        const testimonialObj = {
            title: req.body.title,
            designation: req.body.designation,
            details: req.body.details
        };

        if (filePath) {
            testimonialObj.image = filePath;
        }

        // /
        TestimonialModel.findByIdAndUpdate(req.params.id, testimonialObj, (err, testimonial) => {
            if (err) {
                res.redirect("/admin/testimonial/" + req.params.id + "/edit");
            }
            res.redirect("/admin/testimonial");
        });

    }
}