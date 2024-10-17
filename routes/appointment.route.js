const express = require('express')
const router = express.Router();

const createAppointment = require('../controllers/appointment.controller');
const getAppointment = require('../controllers/appointment.controller');
const { appointmentValidator } = require('../validations/appointment.validator');

router.post("/createAppointment", createAppointment.createAppointment, appointmentValidator);
router.get("/getAppointment", getAppointment.getAppointment);

module.exports = router;