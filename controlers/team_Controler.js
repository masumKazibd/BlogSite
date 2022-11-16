const TeamModel = require('../models/team');

module.exports={
    //team controller

    teamIndex: (req, res, next) =>
        res.render('backend/dashboard/test', { title: 'List of team', layout: 'backend/layout' }),

    teamCreate: (req, res, next) =>
        res.render('index', { title: 'team Create', layout: 'backend/layout' }),
   
    teamEdit: (req, res, next) =>
        res.render('index', { title: 'Edit Team', layout: 'backend/layout' }),
   
    teamDelete: (req, res, next) =>
        res.render('index', { title: 'Team delete', layout: 'backend/layout' }),
    teamShow: (req, res, next) =>
        res.render('index', { title: 'Team Show', layout: 'backend/layout' }),
    
    teamStore: (req, res, next) =>
        res.render('index', { title: 'Team Store', layout: 'backend/layout' }),

    teamUpdate: (req, res, next) =>
        res.render('index', { title: 'Team Update', layout: 'backend/layout' }),
    

}