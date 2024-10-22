const express = require('express');
const router = express.Router();

const { getProcess, createProcess } = require('../controllers/process.controller');
const { uploadProcessImg } = require('../middleware/upload');

router.post('/createProcess', uploadProcessImg, createProcess);
router.get('/getProcess', getProcess);

module.exports = router;