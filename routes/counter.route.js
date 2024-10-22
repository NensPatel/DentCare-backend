const express = require("express");
const router = express.Router();

const { createCounter, getCounter } = require("../controllers/counter.controller");

router.post("/createCounter", createCounter);
router.get("/getCounter", getCounter);

module.exports = router;
