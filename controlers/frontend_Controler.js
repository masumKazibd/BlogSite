const config = require('../config/index');
const TeamModel = require('../models/team');
const BlogModel = require('../models/blog');
const TestimonialModel = require('../models/testimonial');
const AboutModel = require('../models/about');

module.exports={
    home: (req, res, next) =>  {
        // Testimonial list
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
                    image: blog.image
                }
                res.render('frontend/singlePost', { title: 'Blog Post', blog: details });
            })
            .catch((err) => {
                res.json({ "error": "Something went wrong" });
            })
    },

    team: (req, res, next) =>{
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
   
    contact: (req, res, next) =>
        res.render('frontend/contact', { title: 'Contact with us' }),
   
    about: (req, res, next) =>
        res.render('frontend/about', { title: 'About Us' }),
    
    testimonial: (req, res, next) =>{
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