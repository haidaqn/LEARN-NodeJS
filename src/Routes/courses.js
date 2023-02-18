const express = require('express');
const router = express.Router();

const coursesController = require('../app/Controllers/CoursesController');

router.get('/:slug', coursesController.show);

module.exports = router;
