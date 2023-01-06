const DashboardModel = require('../models/dashboard');

module.exports = {

    //admin dashboard controller Start
    admin: (req, res, next) => {
        res.render('backend/dashboard/index', { title: 'Dashboard', layout: 'backend/layout' });
    },
}