module.exports = {

    login: (req, res, next) =>
        res.render('users/login', { title: 'Login'}),
    register: (req, res, next) =>
    res.render('users/register', { title: 'Register'}),
}