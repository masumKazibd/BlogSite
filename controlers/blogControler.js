module.exports={

    //admin dashboard controller
    index: (req, res, next) =>
        res.render('index', { title: 'Dashboard' }),
    
        //blog controller

    blog: (req, res, next) =>
        res.render('index', { title: 'Blog' }),

    create: (req, res, next) =>
        res.render('index', { title: 'Blog Create' }),
   
    edit: (req, res, next) =>
        res.render('index', { title: 'Blog edit' }),
   
    delete: (req, res, next) =>
        res.render('index', { title: 'Blog delete' }),
    show: (req, res, next) =>
        res.render('index', { title: 'Blog show' }),
    
    store: (req, res, next) =>
        res.render('index', { title: 'Blog Store' }),

    update: (req, res, next) =>
        res.render('index', { title: 'Update Blog' }),
   
       
        //team controller

    teamIndex: (req, res, next) =>
        res.render('index', { title: 'List of team' }),

    teamCreate: (req, res, next) =>
        res.render('index', { title: 'team Create' }),
   
    teamEdit: (req, res, next) =>
        res.render('index', { title: 'Edit Team' }),
   
    teamDelete: (req, res, next) =>
        res.render('index', { title: 'Team delete' }),
    teamShow: (req, res, next) =>
        res.render('index', { title: 'Team Show' }),
    
    teamStore: (req, res, next) =>
        res.render('index', { title: 'Team Store' }),

    teamUpdate: (req, res, next) =>
        res.render('index', { title: 'Team Update' }),
    

    // //team controller

    // teamIndex: (req, res, next) =>
    //     res.render('index', { title: 'Blog' }),

    // teamCreate: (req, res, next) =>
    //     res.render('index', { title: 'Blog Create' }),
   
    // teamEdit: (req, res, next) =>
    //     res.render('index', { title: 'Blog Create' }),
   
    // teamDelete: (req, res, next) =>
    //     res.render('index', { title: 'Blog Create' }),
    // teamShow: (req, res, next) =>
    //     res.render('index', { title: 'Blog Create' }),
    
    // teamStore: (req, res, next) =>
    //     res.render('index', { title: 'Blog Create' }),

    // teamUpdate: (req, res, next) =>
    //     res.render('index', { title: 'Blog Create' }),
    

        //testimonial controller

    testimonialIndex: (req, res, next) =>
    res.render('index', { title: 'List of Testimonial' }),

    testimonialCreate: (req, res, next) =>
    res.render('index', { title: 'Testimonial Create' }),

    testimonialEdit: (req, res, next) =>
    res.render('index', { title: 'Edit Testimonial' }),

    testimonialDelete: (req, res, next) =>
    res.render('index', { title: 'Delete Testimonial' }),
    testimonialShow: (req, res, next) =>
    res.render('index', { title: 'Blog Create' }),

    testimonialStore: (req, res, next) =>
    res.render('index', { title: 'Blog Create' }),

    testimonialUpdate: (req, res, next) =>
    res.render('index', { title: 'Blog Create' }),

    
        //contact-us controller

    contactIndex: (req, res, next) =>
        res.render('index', { title: 'Blog' }),
    
    contactCreate: (req, res, next) =>
        res.render('index', { title: 'Blog Create' }),
    
    contactEdit: (req, res, next) =>
        res.render('index', { title: 'Blog Create' }),
    
    contactDelete: (req, res, next) =>
        res.render('index', { title: 'Blog Create' }),
    contactShow: (req, res, next) =>
        res.render('index', { title: 'Blog Create' }),
    
    contactStore: (req, res, next) =>
        res.render('index', { title: 'Blog Create' }),
    
    contactUpdate: (req, res, next) =>
        res.render('index', { title: 'Blog Create' }),
    

    }