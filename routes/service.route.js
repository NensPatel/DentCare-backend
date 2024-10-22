const express = require('express');
const router = express.Router();

const { createService, getService } = require('../controllers/service.controller');
const { uploadServiceImg } = require('../middleware/upload');

router.post('/createService', uploadServiceImg, createService);
router.get('/getService', getService);

module.exports = router;