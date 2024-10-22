const express = require('express');
const router = express.Router();

const { createContact, getContact } = require('../controllers/contact.controller');

router.get('/getContact', getContact);
router.post('/createContact', createContact);

module.exports = router;