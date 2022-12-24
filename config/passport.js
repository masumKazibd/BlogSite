const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

var user=require('../models/user');
const {checkPassword}= require('../lib/passwordValid');

passport.serializeUser((user, done)=>{
    done(null, user.id);
});

passport.deserializeUser((user, done)=>{
    user.findById(id, function(err, user){
        done(err, user);
    });
});

passport.use(new LocalStrategy(
    function (username, password, done){
        user.findByUsername(username, (err, user) => {
            if(err) {
                return done (err);
            }
            if (!user) {
                return done(null, false);
            }
            if (!checkPassword(password, user.password, user.salt)) {
                return done(null, false);
            } 
            return done(null, user);
        })
    }
));