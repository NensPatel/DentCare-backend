const accordionSchema = require('../models/accordion.model');

const logError = (error) => {
    console.error('Error: ', error);
};


// Create POST Api
exports.createAccordion = async (req, res) => {
    const { title, subTitle } = req.body;

    if (!req.file) {
        return res.status(400).send({
            message: 'No file uploaded',
            isSuccess: false,
        });
    }
   

    if (!title || !subTitle) {
        return res.status(400).send({
            message: 'Title and subtitle are required',
            isSuccess: false,
        });
    }

    try {
        const accordion = new accordionSchema({
            image: req.file.filename,
            title,
            subTitle,
        });


        const data = await accordion.save();
        return res.status(201).send({
            data,
            message: 'Accordion created successfully',
            isSuccess: true,
        });
    } catch (error) {
        logError(error);
        return res.status(500).send({
            message: 'Failed to create accordion',
            isSuccess: false,
        });
    }
};


// GET Api
exports.getAccordion = async (req, res) => {
    try {
        const getData = await accordionSchema.find();
        const accordions = await accordionSchema.countDocuments();
        res.status(200).json({
            data: getData,
            totalCount: accordions,
            message: 'Accordion Retrieved Successfully',
            isSuccess: true
        })
    } catch (error) {
        res.status(500).json({
            error,
            message: 'Failed to Retrieve Accordion',
            isSuccess: false
        })
    }
}   