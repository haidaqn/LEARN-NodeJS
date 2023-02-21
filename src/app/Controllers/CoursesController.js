const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
const mongoose = require('../../util/mongoose');

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
    
    store(req, res, next) {
        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(req.body);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch(next);
    }
    edit(req, res, next) {
        const courseId = req.params.id;
        Course.findById( courseId )
            .then(course => res.render('courses/edit', { course: mongooseToObject(course) }))
            .catch(next);
        // res.render('courses/edit');

    }

    //put
    update(req, res, next) {
        // res.json(req.body);
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect("/me/stored/courses"))
            .catch(next);

    }
    // PUt sửa cả document path : sửa từng trường
    destroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('back'))
            .catch (next);
    }
}

module.exports = new CoursesController;