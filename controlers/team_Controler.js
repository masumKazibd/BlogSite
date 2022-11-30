const { validationResult } = require('express-validator');
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
        res.render('backend/team/view', { title: 'Team Show', layout: 'backend/layout' }),
    
    teamStore: (req, res, next) =>{
         // Data Validiation
         const errors = validationResult(req);
         if (!errors.isEmpty()) {
             return res.json({ errors: errors.mapped() });
         }
         const team = new TeamModel({
            name: req.body.name,
            designation: req.body.designation,
            biography: req.body.biography,
            image: req.body.image,
        });

         // Send data to Database

         team.save((err, newTeam) => {
            if (err) {
                return res.json({ error: "Something went wrong!" + err })
            }
            return res.json({ team: newTeam });
        });
     },
     // res.render('backend/team/store', { title: 'Team Store', layout: 'backend/layout' }),

    teamUpdate: (req, res, next) =>
        res.render('backend/team/update', { title: 'Team Update', layout: 'backend/layout' }),
    

}