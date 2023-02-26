const express = require('express');
const router = express.Router();

const coursesController = require('../app/Controllers/CoursesController');
router.get('/create', coursesController.create);
router.post('/store', coursesController.store);
router.get('/:id/edit', coursesController.edit);
router.post('/handle-form-action', coursesController.handleForm);
router.patch('/:id/restore', coursesController.restore);
router.delete('/:id/force', coursesController.forceDestroy);
router.delete('/:id', coursesController.destroy);
router.put('/:id', coursesController.update);
router.get('/:slug', coursesController.show);

module.exports = router;
