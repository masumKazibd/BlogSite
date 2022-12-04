const { validationResult } = require('express-validator');
const TeamModel = require('../models/team');

module.exports = {
    //team controller

    teamIndex: (req, res, next) => {
        TeamModel.find((err, docs) => {
            if (err) {
                return res.json({ error: "Something Went Wrong" + err })
            }
            // return res.json({ blogs: docs });

            const teams = [];
            docs.forEach(Element => {
                teams.push({
                    name: Element.name,
                    designation: Element.designation,
                    biography: Element.biography,
                    id: Element._id,
                    image: Element.image
                });
            });
            res.render('backend/team/index', { title: 'List of team', layout: 'backend/layout', team: teams })
            // res.render('backend/blog/index', { title: 'Blog List', layout: 'backend/layout', data: blogs });
        });
    },
    teamCreate: (req, res, next) =>
        res.render('backend/team/create', { title: 'team Create', layout: 'backend/layout' }),

    teamEdit: (req, res, next) =>
        res.render('backend/team/edit', { title: 'Edit Team', layout: 'backend/layout' }),

    teamDelete: (req, res, next) =>{
        TeamModel.findByIdAndRemove(req.params.id, (err, blog) => {

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
        res.redirect("/admin/team")
        // res.render('backend/team/delete', { title: 'Team delete', layout: 'backend/layout' }),
    },
    teamShow: (req, res, next) =>
        res.render('backend/team/view', { title: 'Team Show', layout: 'backend/layout' }),

    teamStore: (req, res, next) => {
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
                res.redirect("/admin/team")
        });

        const team = new TeamModel({
            name: req.body.name,
            designation: req.body.designation,
            biography: req.body.biography,
            image: filePath
        });

        // Send data to Database

        team.save((err, newTeam) => {
            if (err) {
                return res.json({ error: "Something went wrong!" + err })
            }
            // return res.json({ team: newTeam });
        });
    },
    // res.render('backend/team/store', { title: 'Team Store', layout: 'backend/layout' }),

    teamUpdate: (req, res, next) =>
        res.render('backend/team/update', { title: 'Team Update', layout: 'backend/layout' }),


}