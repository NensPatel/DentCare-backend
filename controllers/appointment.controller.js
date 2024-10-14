const appointmentSchema = require('../models/appointment.model');

const logError = (error) => {
    console.error('Error: ', error);
};

exports.createAppointment = async (req, res) => {
    const { name, email, phone, service, date } = req.body;

    try {
        const appointment = new appointmentSchema({
            name,
            email,
            phone,
            service,
            date
        });
        const data = await appointment.save();
        return res.status(200).send({
            data,
            message: 'Appointment created successfully',
            isSuccess: true
        });
    } catch (error) {
        logError(error);
        return res.status(500).send({
            message: 'Failed to create Appointment due to server error',
            isSuccess: false
        });
    }
};
