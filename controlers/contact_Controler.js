const { validationResult } = require('express-validator');
const ContactModel = require('../models/contact');
module.exports = {

    //contact-us controller

    contactIndex: (req, res, next) =>{
        ContactModel.find((err, docs) => {
            if (err) {
                res.render("error:", { errorStatus: 500 });
            }
            // return res.json({ blogs: docs });
            const contacts = [];
            docs.forEach(Element => {
                contacts.push({
                    icon: Element.icon,
                    title: Element.title,
                    details: Element.details,
                    id: Element._id
                });
            });
            res.render('backend/contact/index', { title: 'Blog List', layout: 'backend/layout', contact: contacts });
        });
    },
    contactCreate: (req, res, next) =>
        res.render('backend/contact/create', { title: 'contact Create', layout: 'backend/layout' }),

    contactEdit: (req, res, next) =>
        res.render('backend/contact/edit', { title: 'contact Edit', layout: 'backend/layout' }),

    contactDelete: (req, res, next) =>{
        ContactModel.findByIdAndRemove(req.params.id, (err, contact)=>{
            if (err) {
                res.render("error", { errorStatus: 500 })
            }
        })
        res.redirect("/admin/contact")
    },

    contactStore: (req, res, next) =>{
        // Data Validiation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render("backend/contact/create", { layout: "backend/layout", errors: errors.mapped() })
        }

        // Send data to Database
        const contact = new ContactModel({
            icon: req.body.icon,
            title: req.body.title,
            details: req.body.details,
        });

        contact.save((err, newContact) => {
            if (err) {
                res.redirect("/admin/contact/create")
            }
            res.redirect("/admin/contact");
        });
    },
    contactUpdate: (req, res, next) =>
        res.render('backend/contact/', { title: 'Blog Create', layout: 'backend/layout' }),

}