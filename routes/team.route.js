const express = require('express');
const router = express.Router();

const { createTeam, getTeam } = require('../controllers/team.controller');
const { uploadTeamImg } = require('../middleware/upload');

router.post('/createTeam', uploadTeamImg, createTeam);
router.get('/getTeam', getTeam);

module.exports = router