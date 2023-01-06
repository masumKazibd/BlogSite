var express = require('express');
const dashboard_Controler = require('../controlers/dashboard_Controler');
const blog_Controler = require('../controlers/blog_Controler');
const team_Controler = require('../controlers/team_Controler');
const testimonial_Controler = require('../controlers/testimonial_Controler');
const contact_Controler = require('../controlers/contact_Controler');
const about_Controler = require('../controlers/about_Controler');

const BlogRequest = require('../request/blog');
const TeamRequest = require('../request/team');
const TestimonialRequest = require('../request/testimonial');
const AboutRequest = require('../request/about');


var router = express.Router();

/* Route Admin page. */
router.get('/', dashboard_Controler.admin);

/* Route Blog page. */

router.get('/blog', blog_Controler.index);

router.get('/blog/create', blog_Controler.create);

router.get('/blog/:id/edit', blog_Controler.edit);

router.get('/blog/:id/delete', blog_Controler.delete);

router.get('/blog/:id/view', blog_Controler.show);

router.post('/blog/store', BlogRequest.store, blog_Controler.store);

router.post('/blog/:id/update', blog_Controler.update);


/* Route Team page. */
router.get('/team', team_Controler.teamIndex);

router.get('/team/create', team_Controler.teamCreate);

router.get('/team/:id/edit', team_Controler.teamEdit);

router.get('/team/:id/delete', team_Controler.teamDelete);

router.get('/team/:id/view', team_Controler.teamShow);

router.post('/team/store', TeamRequest.store, team_Controler.teamStore);

router.post('/team/:id/update', team_Controler.teamUpdate);

//   Route Testomonial page. 

router.get('/testimonial', testimonial_Controler.testimonialIndex);

router.get('/testimonial/create', testimonial_Controler.testimonialCreate);

router.get('/testimonial/:id/edit', testimonial_Controler.testimonialEdit);

router.get('/testimonial/:id/delete', testimonial_Controler.testimonialDelete);

router.get('/testimonial/:id/view', testimonial_Controler.testimonialShow);

router.post('/testimonial/store', TestimonialRequest.store, testimonial_Controler.testimonialStore);

router.post('/testimonial/:id/update', testimonial_Controler.testimonialUpdate);


//  about page. 

router.get('/about', about_Controler.aboutIndex);

router.get('/about/create', about_Controler.aboutCreate);

router.get('/about/:id/edit', about_Controler.aboutEdit);

router.get('/about/:id/delete', about_Controler.aboutDelete);

router.get('/about/:id/view', about_Controler.aboutShow);

router.post('/about/store', AboutRequest.store, about_Controler.aboutStore);

router.post('/about/:id/update', about_Controler.aboutUpdate);
//   /* Route Social Media Link page. */


//   Route Contact us page. 

router.get('/contact', contact_Controler.contactIndex);

router.get('/contact/create', contact_Controler.contactCreate);

router.get('/contact/:id/edit', contact_Controler.contactEdit);

router.get('/contact/:id/delete', contact_Controler.contactDelete);

// router.get('/contact/:id/view', contact_Controler.contactShow);

router.post('/contact/store', contact_Controler.contactStore);

router.post('/contact/:id/update', contact_Controler.contactUpdate);


module.exports = router;