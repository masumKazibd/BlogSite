var express = require('express');
const pageControler = require('../controlers/frontend_Controler');
var router = express.Router();

// Middleware
const {menus}=require('../middleware/menuMiddleware');
router.use(menus);

/* GET home page. */
router.get('/', pageControler.home);
router.get('/:id/read', pageControler.blogPost);
router.get('/team', pageControler.team);
router.get('/blog', pageControler.blog);
router.get('/contact-us', pageControler.contact);
router.get('/about-us', pageControler.about);
router.get('/testimonial', pageControler.testimonial);


module.exports = router;
