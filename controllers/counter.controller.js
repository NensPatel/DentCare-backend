const counterSchema = require('../models/counter.model');

exports.getCounter = async (req, res) => {
    try {
        const getData = await counterSchema.find();
        const counters = await counterSchema.countDocuments();
        res.status(200).json({
            data: getData,
            totalCounters: counters,
            message: 'Counter Retrieved Successfully',
            isSuccess: true
        });
    } catch (error) {
        res.status(500).json({
            error,
            message: 'Failed to Retrieve Counter',
            isSuccess: false
        });
    }
}