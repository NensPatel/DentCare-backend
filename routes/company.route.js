const expres = require('express');
const router = expres.Router();

const createCompany = require('../controllers/company.controller');
const getCompany = require('../controllers/company.controller');
const { uploadCompanyImg } = require('../middleware/upload');

router.post('/createCompany', uploadCompanyImg, createCompany.createCompany);
router.get('/getCompany', getCompany.getCompany);

module.exports = router