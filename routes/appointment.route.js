const express = require('express')
const router = express.Router();

const { createAppointment, getAppointment } = require('../controllers/appointment.controller');
const { appointmentValidator } = require('../validations/appointment.validator');

router.post("/createAppointment", createAppointment, appointmentValidator);
router.get("/getAppointment", getAppointment);

module.exports = router;