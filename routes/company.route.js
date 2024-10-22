const expres = require('express');
const router = expres.Router();

const { createCompany, getCompany } = require('../controllers/company.controller');
const { uploadCompanyImg } = require('../middleware/upload');

router.post('/createCompany', uploadCompanyImg, createCompany);
router.get('/getCompany', getCompany);

module.exports = router