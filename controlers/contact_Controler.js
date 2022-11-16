module.exports = {

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