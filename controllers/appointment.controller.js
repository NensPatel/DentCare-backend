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


exports.getAppointment = async (req, res) => {
    try {
        const getData = await appointmentSchema.find();
        const appointments = await appointmentSchema.countDocuments();
        return res.status(200).send({
            data: getData,
            totalCount: appointments,
            message: 'Appointments retrieved successfully',
            isSuccess: true
        });
    } catch (error) {
        return res.status(500).send({
            error,
            message: 'Failed to get Appointments due to server error',
            isSuccess: false
        });
    }
}