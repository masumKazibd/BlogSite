module.exports = {
    //blog controller

    blog: (req, res, next) =>
        res.render('backend/blog/index', { title: 'Blog', layout: 'backend/layout' }),

    create: (req, res, next) =>
        res.render('backend/blog/create', { title: 'Blog Create', layout: 'backend/layout' }),

    edit: (req, res, next) =>
        res.render('index', { title: 'Blog edit', layout: 'backend/layout' }),

    delete: (req, res, next) =>
        res.render('index', { title: 'Blog delete', layout: 'backend/layout' }),
    show: (req, res, next) =>
        res.render('index', { title: 'Blog show', layout: 'backend/layout' }),

    store: (req, res, next) =>
        res.render('index', { title: 'Blog Store', layout: 'backend/layout' }),

    update: (req, res, next) =>
        res.render('index', { title: 'Update Blog', layout: 'backend/layout' })

}