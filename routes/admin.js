var express = require('express');
const backend_Controler = require('../controlers/backend_Controler');
const blog_Controler = require('../controlers/blog_Controler');
const team_Controler = require('../controlers/team_Controler');

var router = express.Router();

/* Route Admin page. */
router.get('/', backend_Controler.admin);

/* Route Blog page. */

router.get('/blog', blog_Controler.blog);

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

    router.get('/testimonial', backend_Controler.testimonialIndex);

    router.get('/testimonial/create', backend_Controler.testimonialCreate);
        
    router.get('/testimonial/:id/edit', backend_Controler.testimonialEdit);
        
    router.delete('/testimonial/:id/delete', backend_Controler.testimonialDelete);
        
    router.get('/testimonial/:id/show', backend_Controler.testimonialShow);
        
    router.post('/testimonial/store', backend_Controler.testimonialStore);
        
    router.put('/testimonial/:id/update', backend_Controler.testimonialUpdate);


        //   Route Contact us page. 

    router.get('/contact', backend_Controler.contactIndex);

    router.get('/contact/create', backend_Controler.contactCreate);
        
    router.get('/contact/:id/edit', backend_Controler.contactEdit);
        
    router.delete('/contact/:id/delete', backend_Controler.contactDelete);
        
    router.get('/contact/:id/show', backend_Controler.contactShow);
        
    router.post('/contact/store', backend_Controler.contactStore);
        
    router.put('/contact/:id/update', backend_Controler.contactUpdate);

  
//   /* Route Social Media Link page. */



module.exports = router;