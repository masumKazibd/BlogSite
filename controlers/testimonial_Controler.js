const TestimonialModel = require('../models/testimonial');

module.exports = {
    //testimonial controller

    testimonialIndex: (req, res, next) =>
        res.render('backend/testimonial/index', { title: 'List of Testimonial', layout: 'backend/layout' }),

    testimonialCreate: (req, res, next) =>
        res.render('backend/testimonial/create', { title: 'Testimonial Create', layout: 'backend/layout' }),

    testimonialEdit: (req, res, next) =>
        res.render('backend/testimonial/edit', { title: 'Edit Testimonial', layout: 'backend/layout' }),

    testimonialDelete: (req, res, next) =>
        res.render('backend/testimonial/delete', { title: 'Delete Testimonial', layout: 'backend/layout' }),
    testimonialShow: (req, res, next) =>
        res.render('backend/testimonial/view', { title: 'Blog Create', layout: 'backend/layout' }),

    testimonialStore: (req, res, next) =>
        res.render('backend/testimonial/store', { title: 'Blog Create', layout: 'backend/layout' }),

    testimonialUpdate: (req, res, next) =>
        res.render('backend/testimonial/update', { title: 'Blog Create', layout: 'backend/layout' }),


}