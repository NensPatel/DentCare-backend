const express = require('express');
const router = express.Router();

//Routes
const CounterRoutes = require('./counter.route');
const AccordionRoutes = require('./accordion.route');
const AppointmentRoutes = require('./appointment.route');
const UserRoutes = require('./user.route');
const TestimonialRoutes = require('./testimonial.route');
const ContactRoutes = require('./contact.route');
const CompanyRoutes = require('./company.route');

//Usable Routes
router.use('/counter', CounterRoutes);
router.use('/accordion', AccordionRoutes);
router.use('/appointment', AppointmentRoutes);
router.use('/user', UserRoutes);
router.use('/testimonial', TestimonialRoutes);
router.use('/contact', ContactRoutes);
router.use('/company', CompanyRoutes);

module.exports = router;