const { validationResult } = require('express-validator');
const AboutModel = require('../models/about');
const fs = require("fs");

module.exports = {
    //about controller Start=
    aboutIndex: (req, res, next) => {
        // about list
        AboutModel.find((err, docs) => {
            if (err) {
                return res.json({ error: "Something went wrong!" + err })
            }
            // return res.json({ abouts: docs });
            const abouts = [];
            docs.forEach(Element => {
                abouts.push({
                    image1: Element.image1,
                    history: Element.history,
                    id: Element._id,
                    image2: Element.image2,
                    mission: Element.mission
                });
            });
            res.render('backend/about/index', { title: 'About List', layout: 'backend/layout', about: abouts });
        });
    },

    //About Create
    aboutCreate: (req, res, next) =>
        res.render('backend/about/create', { title: 'About Create', layout: 'backend/layout' }),

    //About Edit
    aboutEdit: (req, res, next) => {
        AboutModel.findById(req.params.id)
            .then((about) => {
                const details = {
                    image1: Element.image1,
                    history: Element.history,
                    id: Element._id,
                    image2: Element.image2,
                    mission: Element.mission
                }
                res.render('backend/about/edit', { title: 'About edit', layout: 'backend/layout', about: details });
            })
    },

    //About Delete
    aboutDelete: (req, res, next) => {
        AboutModel.findByIdAndRemove(req.params.id, (err, about) => {

            if (err) {
                console.log("Could not deleted.");
            }
            // delete file permanantly
            try {
                fs.unlink("public/" + about.image1, () => {
                    console.log("File deleted===================");
                })

                fs.unlink("public/" + about.image2, () => {
                    console.log("File deleted===================");
                })
                
            } catch (error) {
                console.log("Something went wrong====================");
            }
        })
        res.redirect("/admin/about")
        // res.render('index', { title: 'About delete', layout: 'backend/layout' }),
    },

    //About Show
    aboutShow: (req, res, next) => {
        AboutModel.findById(req.params.id)
            .then((about) => {
                // res.json({ "about": About });
                const details = {
                    history: about.history,
                    image1: about.image1,
                    mission: about.mission,
                    image2: about.image2
                }
                res.render('backend/about/show', { title: 'About Show', layout: 'backend/layout', about: details });
            })
            .catch((err) => {
                res.json({ "error": "Something went wrong" });
            })
    },

    //About Store
    aboutStore: (req, res, next) => {
        // Data Validiation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({ errors: errors.mapped() });
        }

        let sampleFile1, sampleFile2;
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.');
        }

        // The name of the input field (i.e. "sampleFile") is used to retrive the uploaded file
        sampleFile1 = req.files.image1;
        sampleFile2 = req.files.image2;
        let rnd = new Date().valueOf();
        let filePath1 = 'upload/' + rnd + sampleFile1.name;
        let filePath2 = 'upload/' + rnd + sampleFile2.name;

        // Use the mv() method to place the file somewhere on your server

        sampleFile1.mv('public/' + filePath1, function (err) {
            if (err)
                //     return res.status(500).send(err);
                res.send('File Uploaded!');
            // res.redirect("/admin/about")
        });

        sampleFile2.mv('public/' + filePath2, function (err) {
            if (err)
                //     return res.status(500).send(err);
                res.send('File Uploaded!');
            res.redirect("/admin/about")
        });

        // Send data to Database
        const about = new AboutModel({
            image1: filePath1,
            history: req.body.history,
            mission: req.body.mission,
            image2: filePath2
        });

        about.save((err, newAbout) => {
            if (err) {
                return res.json({ error: "Something went wrong!" + err })
            }
            // return res.json({ about: newAbout });
        });

        // return res.json(req.body);

        // res.render('backend/about/store', { title: 'About Store', layout: 'backend/layout' });
    },

    //About Update
    aboutUpdate: (req, res, next) => {
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
                    res.redirect("/admin/about/" + req.params.id + "/edit");
            });
        }
        const aboutObj = {
            title: req.body.title,
            slug: req.body.slug,
            details: req.body.details
        };

        if (filePath) {
            aboutObj.image = filePath;
        }

        // /
        AboutModel.findByIdAndUpdate(req.params.id, aboutObj, (err, about) => {
            if (err) {
                res.redirect("/admin/about/" + req.params.id + "/edit");
            }
            res.redirect("/admin/about");
        });

    }
    //About controller End
}