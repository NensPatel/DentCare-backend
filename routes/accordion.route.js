const express = require('express');
const router = express.Router();
const { uploadAccordionImg } = require('../middleware/upload');
const { getAccordion, createAccordion } = require('../controllers/accordion.controller');

router.get('/getAccordion', getAccordion);
router.post('/createAccordion', uploadAccordionImg, createAccordion);


module.exports = router;