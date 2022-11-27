const { validationResult } = require('../models/team')
const TeamModel = require('../models/team');

module.exports={
    //team controller

    teamIndex: (req, res, next) =>
        res.render('backend/team/index', { title: 'List of team', layout: 'backend/layout' }),

    teamCreate: (req, res, next) =>
        res.render('backend/team/create', { title: 'team Create', layout: 'backend/layout' }),
   
    teamEdit: (req, res, next) =>
        res.render('backend/team/edit', { title: 'Edit Team', layout: 'backend/layout' }),
   
    teamDelete: (req, res, next) =>
        res.render('backend/team/delete', { title: 'Team delete', layout: 'backend/layout' }),
    teamShow: (req, res, next) =>
        res.render('backend/team/delete', { title: 'Team Show', layout: 'backend/layout' }),
    
    teamStore: (req, res, next) =>
        res.render('backend/team/store', { title: 'Team Store', layout: 'backend/layout' }),

    teamUpdate: (req, res, next) =>
        res.render('backend/team/update', { title: 'Team Update', layout: 'backend/layout' }),
    

}