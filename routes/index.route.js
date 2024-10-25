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
const WhychooseusRoutes = require('./whychooseus.route');
const ProcessRoutes = require('./process.route');
const ServiceRoutes = require('./service.route');
const TeamRoutes = require('./team.route');
const SettingRoutes = require('./setting.route');
const SocialMediaRoutes = require('./socialmedia.route');

//Usable Routes
router.use('/counter', CounterRoutes);
router.use('/accordion', AccordionRoutes);
router.use('/appointment', AppointmentRoutes);
router.use('/user', UserRoutes);
router.use('/testimonial', TestimonialRoutes);
router.use('/contact', ContactRoutes);
router.use('/company', CompanyRoutes);
router.use('/whychooseus', WhychooseusRoutes);
router.use('/process', ProcessRoutes);
router.use('/service', ServiceRoutes);
router.use('/team', TeamRoutes);
router.use('/setting', SettingRoutes);
router.use('/socialmedia', SocialMediaRoutes);

module.exports = router;