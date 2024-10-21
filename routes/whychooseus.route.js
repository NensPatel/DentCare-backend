const express = require('express');
const router = express.Router();

const { createWhyChooseUs } = require('../controllers/whychooseus.controller');
const { getWhychooseus } = require('../controllers/whychooseus.controller');
const { uploadWhyChooseUsImg } = require('../middleware/upload');

router.post('/createWhyChooseUs', uploadWhyChooseUsImg, createWhyChooseUs);
router.get('/getWhychooseus', getWhychooseus);

module.exports = router;
