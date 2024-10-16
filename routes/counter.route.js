const express = require("express");
const router = express.Router();

const createCounter = require("../controllers/counter.controller");
const getCounter = require("../controllers/counter.controller");

router.post("/createCounter", createCounter.createCounter);
router.get("/getCounter", getCounter.getCounter);

module.exports = router;
