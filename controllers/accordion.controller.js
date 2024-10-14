const accordionSchema = require('../models/accordion.model');

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