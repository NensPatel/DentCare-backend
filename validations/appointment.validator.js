const joi = require('joi');

const appointmentValidator = async (req, res) => {
    try {
        const schema = joi.object({
            name: joi.string().required("Name is required"),
            email: joi.string().required("Email is required"),
            phone: joi.string().required("Phone number is required"),
            service: joi.string().required("Select one service"),
            date: joi.string().required("Select date"),
        });
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).send({
                message: message.error,
                isSuccess: false
            })
        } else {
            next();
        }
    } catch (error) {
        return res.status(400).send({
            message: 'Invalid Data format',
            isSuccess: false
        })
    }
}

module.exports = { appointmentValidator }