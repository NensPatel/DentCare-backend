const contactSchema = require('../models/contact.model');

exports.createContact = async (req, res) => {
    const { email, phone, address, title, subTitle, time, icon } = req.body;

    if (!email) {
        return res.status(400).send({
            message: 'All fields are required',
            isSuccess: false
        })
    }
    if (!phone) {
        return res.status(400).send({
            message: 'All fields are required',
            isSuccess: false
        })
    }
    if (!address) {
        return res.status(400).send({
            message: 'All fields are required',
            isSuccess: false
        })
    }
    if (!title) {
        return res.status(400).send({
            message: 'All fields are required',
            isSuccess: false
        })
    }
    if (!subTitle) {
        return res.status(400).send({
            message: 'All fields are required',
            isSuccess: false
        })
    }
    if (!time) {
        return res.status(400).send({
            message: 'All fields are required',
            isSuccess: false
        })
    }
    if (!icon) {
        return res.status(400).send({
            message: 'All fields are required',
            isSuccess: false
        })
    }

    try {
        const createObj = {
            email,
            phone,
            address,
            title,
            subTitle,
            time,
            icon
        };

        const data = await contactSchema.create(createObj);
        return res.status(200).send({
            data,
            message: 'Contact created successfully',
            isSuccess: true
        })
    } catch (error) {
        logError(error);
        return res.status(500).send({
            message: 'Failed to create Contact due to server error',
            isSuccess: false
        })
    }
}

// GET API
exports.getContact = async (req, res) => {
    try {
        const getData = await contactSchema.find();
        const contacts = await contactSchema.countDocuments();
        res.status(200).json({
            data: getData,
            totalCount: contacts,
            message: "contact retrieved successfully",
            isSuccess: true
        })
    } catch (error) {
        return res.status(500).send({
            error,
            message: "Error while getting contact",
            isSuccess: false
        })
    }
}

