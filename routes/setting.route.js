const express = require('express');
const router = express.Router();

const { updateSetting, getSetting } = require('../controllers/setting.controller');
const { uploadSettingImg } = require('../middleware/upload');

router.put('/updateSetting', uploadSettingImg, updateSetting);
router.get('/getSetting', getSetting);

module.exports = router