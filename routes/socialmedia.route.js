const express = require('express');
const router = express.Router();

const { createSocialMedia } = require('../controllers/socialmedia.controller');

router.post('/createSocialMedia', createSocialMedia);

module.exports = router;