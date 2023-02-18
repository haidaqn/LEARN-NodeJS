const Course = require('../models/Course');

class CoursesController {
    show(req, res,next) {
       
        Course.findOne({ slug: req.params.slug })
            .then(course => res.json(course))
            .catch(next);

        // res.send("course " + req.params.slug)
    }
}

module.exports = new CoursesController;