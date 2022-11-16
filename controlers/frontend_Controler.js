const config = require('../config/index');

module.exports={
    home: (req, res, next) =>
        res.render('frontend/index', { title: config.NAME }),
    
    team: (req, res, next) =>
        res.render('frontend/team', { title: 'Meet our team' }),

    blog: (req, res, next) =>
        res.render('frontend/blog', { title: 'Read Our Blog' }),
   
    contact: (req, res, next) =>
        res.render('frontend/contact', { title: 'Contact with us' }),
   
    about: (req, res, next) =>
        res.render('frontend/about', { title: 'About Us' }),
    
    testimonial: (req, res, next) =>
        res.render('frontend/testimonial', { title: 'About Us' }),
    }