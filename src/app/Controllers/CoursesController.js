const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CoursesController {
    show(req, res,next) {
       
        Course.findOne({ slug: req.params.slug })
            .then(course => res.render('courses/show', { course : mongooseToObject(course) }))
            .catch(next);

        // res.send("course " + req.params.slug)
    }
    //get
    create(req, res, next) {
        res.render("courses/create")
    }
    // post
    /* store(req, res, next) {

        req.body.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDGAmQ1LASjIB0VbARxU_Sa_UHXPA`

        const course = new Course(req.body);
        
        course.save()

        res.send("courses/store");
    } */
    
    store(req, res, next) {
        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(req.body);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch(next);
    }
}

module.exports = new CoursesController;