const express = require('express');
const router = express.Router();

//Routes
const CounterRoutes = require('./counter.route');
const AccordionRoutes = require('./accordion.route');
const AppointmentRoutes = require('./appointment.route');

//Usable Routes
router.use('/counter', CounterRoutes);
router.use('/accordion', AccordionRoutes);
router.use('/appointment', AppointmentRoutes)

module.exports = router;