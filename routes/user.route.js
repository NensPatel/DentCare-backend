const express = require('express');
const router = express.Router();

const { register, login, getProfile } = require("../controllers/user.controller");

router.post("/register", register);
router.post("/login", login);
router.get("/getProfile", getProfile);

module.exports = router