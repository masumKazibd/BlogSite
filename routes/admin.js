var express = require('express');
const dashboard_Controler = require('../controlers/dashboard_Controler');
const blog_Controler = require('../controlers/blog_Controler');
const team_Controler = require('../controlers/team_Controler');
const testimonial_Controler = require('../controlers/testimonial_Controler');
const contact_Controler = require('../controlers/contact_Controler');

var router = express.Router();

/* Route Admin page. */
router.get('/', dashboard_Controler.admin);

/* Route Blog page. */

router.get('/blog', blog_Controler.index);

router.get('/blog/create', blog_Controler.create);

router.get('/blog/:id/edit', blog_Controler.edit);

router.delete('/blog/:id/delete', blog_Controler.delete);

router.get('/blog/:id/show', blog_Controler.show);

router.post('/blog/store', blog_Controler.store);

router.put('/blog/:id/update', blog_Controler.update);


/* Route Team page. */
router.get('/team', team_Controler.teamIndex);

router.get('/team/create', team_Controler.teamCreate);

router.get('/team/:id/edit', team_Controler.teamEdit);

router.delete('/team/:id/delete', team_Controler.teamDelete);

router.get('/team/:id/show', team_Controler.teamShow);

router.post('/team/store', team_Controler.teamStore);

router.put('/team/:id/update', team_Controler.teamUpdate);

//   Route Testomonial page. 

router.get('/testimonial', testimonial_Controler.testimonialIndex);

router.get('/testimonial/create', testimonial_Controler.testimonialCreate);

router.get('/testimonial/:id/edit', testimonial_Controler.testimonialEdit);

router.delete('/testimonial/:id/delete', testimonial_Controler.testimonialDelete);

router.get('/testimonial/:id/show', testimonial_Controler.testimonialShow);

router.post('/testimonial/store', testimonial_Controler.testimonialStore);

router.put('/testimonial/:id/update', testimonial_Controler.testimonialUpdate);


//   Route Contact us page. 

router.get('/contact', contact_Controler.contactIndex);

router.get('/contact/create', contact_Controler.contactCreate);

router.get('/contact/:id/edit', contact_Controler.contactEdit);

router.delete('/contact/:id/delete', contact_Controler.contactDelete);

router.get('/contact/:id/show', contact_Controler.contactShow);

router.post('/contact/store', contact_Controler.contactStore);

router.put('/contact/:id/update', contact_Controler.contactUpdate);


//   /* Route Social Media Link page. */



module.exports = router;