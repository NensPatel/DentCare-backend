const userSchema = require('../models/user.model');

const logError = (error) => {
    console.error('Error: ', error);
};

exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = new userSchema({
            name,
            email,
            password
        });
        await user.save();
        return res.status(200).send({
            data: user,
            message: 'User created successfully',
            isSuccess: true
        })
    } catch (error) {
        logError(error);
        return res.status(500).send({
            message: 'Failed to create User due to server error',
            isSuccess: false
        });
    }
}