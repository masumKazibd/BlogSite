const config = require('../config/index');
const TeamModel = require('../models/team');
const BlogModel = require('../models/blog');
const TestimonialModel = require('../models/testimonial');
const AboutModel = require('../models/about');
const ContactModel = require('../models/contact');

module.exports = {
    home: (req, res, next) => {
        // Show Blogs on Home Page
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
                    id: Element._id,
                    catagory: Element.catagory,
                    date: Element.date,
                    image: Element.image
                });
            });
            res.render('frontend/index', { title: 'home', blog: blogs });
        });
    },

    blogPost: (req, res, next) => {
        BlogModel.findById(req.params.id)
            .then((blog) => {
                // res.json({ "blog": blog });
                const details = {
                    title: blog.title,
                    details: blog.details,
                    catagory: blog.catagory,
                    date: blog.date,
                    image: blog.image
                }
                res.render('frontend/singlePost', { title: 'Blog Post', blog: details });
            })
            .catch((err) => {
                res.json({ "error": "Something went wrong" });
            })
    },

    team: (req, res, next) => {
        TeamModel.find((err, docs) => {
            if (err) {
                return res.json({ error: "Something Went Wrong" + err })
            }
            // return res.json({ teams: docs });

            const teams = [];
            docs.forEach(Element => {
                teams.push({
                    title: Element.title,
                    designation: Element.designation,
                    biography: Element.biography,
                    id: Element._id,
                    image: Element.image
                });
            });
            res.render('frontend/team', { title: 'Meet our team', team: teams })
        });
    },

    blog: (req, res, next) =>
        res.render('frontend/blog', { title: 'Read Our Blog' }),

    contact: (req, res, next) =>{
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
            res.render('frontend/contact', { title: 'Contact with us', contact: contacts });
        });
    },

    about: (req, res, next) => {
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
            res.render('frontend/about', { title: 'About Us', about: abouts });
        });
    },

    testimonial: (req, res, next) => {
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
            res.render('frontend/testimonial', { title: 'List of testimonial', testimonial: testimonials })
        });
    }
}