var express = require('express');
const blogControler = require('../controlers/backend_Controler');
var router = express.Router();

/* GET Admin page. */
router.get('/', blogControler.index);

/* GET Blog page. */

router.get('/blog', blogControler.blog);

router.get('/blog/create', blogControler.create);

router.get('/blog/:id/edit', blogControler.edit);

router.delete('/blog/:id/delete', blogControler.delete);

router.get('/blog/:id/show', blogControler.show);

router.post('/blog/store', blogControler.store);

router.put('/blog/:id/update', blogControler.update);


/* GET Team page. */
router.get('/team', blogControler.teamIndex);

router.get('/team/create', blogControler.teamCreate);

router.get('/team/:id/edit', blogControler.teamEdit);

router.delete('/team/:id/delete', blogControler.teamDelete);

router.get('/team/:id/show', blogControler.teamShow);

router.post('/team/store', blogControler.teamStore);

router.put('/team/:id/update', blogControler.teamUpdate);

        //   GET Testomonial page. 

    router.get('/testimonial', blogControler.testimonialIndex);

    router.get('/testimonial/create', blogControler.testimonialCreate);
        
    router.get('/testimonial/:id/edit', blogControler.testimonialEdit);
        
    router.delete('/testimonial/:id/delete', blogControler.testimonialDelete);
        
    router.get('/testimonial/:id/show', blogControler.testimonialShow);
        
    router.post('/testimonial/store', blogControler.testimonialStore);
        
    router.put('/testimonial/:id/update', blogControler.testimonialUpdate);


        //   GET Contact us page. 

    router.get('/contact', blogControler.contactIndex);

    router.get('/contact/create', blogControler.contactCreate);
        
    router.get('/contact/:id/edit', blogControler.contactEdit);
        
    router.delete('/contact/:id/delete', blogControler.contactDelete);
        
    router.get('/contact/:id/show', blogControler.contactShow);
        
    router.post('/contact/store', blogControler.contactStore);
        
    router.put('/contact/:id/update', blogControler.contactUpdate);

  
//   /* GET Social Media Link page. */



module.exports = router;