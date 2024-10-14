const express = require('express');
const router = express.Router();

const getCounter = require('../controllers/counter.controller');

router.get('/getCounter', getCounter.getCounter);

module.exports = router;