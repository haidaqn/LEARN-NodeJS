const express = require('express');
const router = express.Router();

const meController = require('../app/Controllers/MeController');

router.get('/stored/courses', meController.storedCourses);
// router.get('/stored/news', meController.create);

module.exports = router;
