const userSchema = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const logError = (error) => {
    console.error('Error: ', error);
};

exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    try {

        const findEmail = await userSchema.findOne({ email });
        if (findEmail) {
            return res.status(409).send({
                message: 'Email already exists',
                isSuccess: false
            })
        } else {
            const Password = await bcrypt.hash(password, 10);
            const newUser = new userSchema({
                name,
                email,
                password: Password
            });
            await newUser.save();
            return res.status(200).send({
                data: newUser,
                message: 'User created successfully',
                isSuccess: true
            })
        }
    } catch (error) {
        logError(error);
        return res.status(500).send({
            message: 'Failed to create User due to server error',
            isSuccess: false
        });
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const findEmail = await userSchema.findOne({ email });
        if (!findEmail) {
            return res.status(404).send({
                message: 'Email is not Found!',
                isSuccess: false
            })
        } else {
            const comparePassword = await bcrypt.compare(password, findEmail.password);
            if (!comparePassword) {
                return res.status(401).send({
                    message: 'Invalid Password!',
                    isSuccess: false
                })
            } else {
                const { name, email } = findEmail;
                const authToken = jwt.sign(
                    { id: findEmail._id },
                    process.env.USER_TOKEN_KEY,
                    { expiresIn: process.env.USER_TOKEN_EXPIRE }
                )
                return res.status(200).send({
                    user: { name, email },
                    message: 'Login successfully',
                    isSuccess: true,
                    token: authToken,
                })
            }
        }
    } catch (error) {
        return res.status(500).send({
            error: error.message,
            message: 'Failed to login due to server error',
            isSuccess: false
        });
    }
}

exports.getProfile = async (req, res) => {
    const userId = req?.user?._id;
    try {
        const getData = await userSchema.findById(userId).select("_id name email");
        if (!getData) {
            return res.status(404).send({
                message: 'User not found',
                isSuccess: false
            })
        }
        return res.status(200).send({
            profile: getData,
            message: 'Profile retrieved successfully',
            isSuccess: true
        });
    } catch (error) {
        return res.status(500).send({
            error: error.message,
            message: 'Failed to get profile',
            isSuccess: false
        })
    }
}