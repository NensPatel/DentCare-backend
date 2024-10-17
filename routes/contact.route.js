const express = require('express');
const router = express.Router();

const createContact = require('../controllers/contact.controller');
const getContact = require('../controllers/contact.controller');

router.get('/getContact', getContact.getContact);
router.post('/createContact', createContact.createContact);

module.exports = router;