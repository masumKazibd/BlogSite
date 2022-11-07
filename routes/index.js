var express = require('express');
const pageControler = require('../controlers/pageControler');
var router = express.Router();

/* GET home page. */
router.get('/', pageControler.home);
router.get('/team', pageControler.team);
router.get('/blog', pageControler.blog);
router.get('/contact-us', pageControler.contact);
router.get('/about-us', pageControler.about);
router.get('/testimonial', pageControler.testimonial);


module.exports = router;
