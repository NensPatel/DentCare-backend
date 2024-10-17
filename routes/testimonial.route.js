const express = require('express');
const router = express.Router();

const { uploadTestimonialImg } = require('../middleware/upload');
const { createTestimonial, getTestimonial } = require('../controllers/testimonial.controller');

router.post('/createTestimonial', uploadTestimonialImg, createTestimonial);
router.get('/getTestimonial', getTestimonial);

module.exports = router;