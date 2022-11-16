module.exports={

    //admin dashboard controller
    admin: (req, res, next) =>
        res.render('backend/dashboard/index', { title: 'Dashboard', layout: 'backend/layout'}),
       
        
        //testimonial controller

    testimonialIndex: (req, res, next) =>
    res.render('backend/testimonial/index', { title: 'List of Testimonial', layout: 'backend/layout' }),

    testimonialCreate: (req, res, next) =>
    res.render('index', { title: 'Testimonial Create', layout: 'backend/layout' }),

    testimonialEdit: (req, res, next) =>
    res.render('index', { title: 'Edit Testimonial', layout: 'backend/layout' }),

    testimonialDelete: (req, res, next) =>
    res.render('index', { title: 'Delete Testimonial', layout: 'backend/layout' }),
    testimonialShow: (req, res, next) =>
    res.render('index', { title: 'Blog Create', layout: 'backend/layout' }),

    testimonialStore: (req, res, next) =>
    res.render('index', { title: 'Blog Create', layout: 'backend/layout' }),

    testimonialUpdate: (req, res, next) =>
    res.render('index', { title: 'Blog Create', layout: 'backend/layout' }),

    
        //contact-us controller

    contactIndex: (req, res, next) =>
        res.render('index', { title: 'Blog', layout: 'backend/layout' }),
    
    contactCreate: (req, res, next) =>
        res.render('index', { title: 'Blog Create', layout: 'backend/layout' }),
    
    contactEdit: (req, res, next) =>
        res.render('index', { title: 'Blog Create', layout: 'backend/layout' }),
    
    contactDelete: (req, res, next) =>
        res.render('index', { title: 'Blog Create', layout: 'backend/layout' }),
    contactShow: (req, res, next) =>
        res.render('index', { title: 'Blog Create', layout: 'backend/layout' }),
    
    contactStore: (req, res, next) =>
        res.render('index', { title: 'Blog Create', layout: 'backend/layout' }),
    
    contactUpdate: (req, res, next) =>
        res.render('index', { title: 'Blog Create', layout: 'backend/layout' }),
    

    }