var express = require('express');
var router = express.Router();
const userControler = require('../controlers/user_Controler');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', userControler.login);

router.get('/register', userControler.register);

module.exports = router;
