const express = require('express');
const router = express.Router();

const getAccordion = require('../controllers/accordion.controller');

router.get('/getAccordion', getAccordion.getAccordion);

module.exports = router;


// fetch == grt
// update == put
// deley == delete
// data pss (body plyload) = post