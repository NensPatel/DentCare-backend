const serviceSchema = require('../models/service.model');
const { convertFilePathSlashes } = require('../helpers/common');

const logError = (error) => {
    console.error('Error: ', error);
};

exports.createService = async (req, res) => {
    const { title } = req.body;

    if (!req.file) {
        return res.status(400).json({
            message: "No file uploaded",
            isSuccess: false,
        });
    }

    if (!title) {
        return res.status(400).json({
            message: "Title are required",
            isSuccess: false,
        });
    }

    try {
        const filePath = convertFilePathSlashes(req.file.path);
        if (!filePath) {
            return res.status(400).json({
                message: "Image path is required.",
                isSuccess: false,
            });
        }

        const createObj = {
            title,
            image: filePath,
        };

        const data = new serviceSchema(createObj);
        await data.save();

        return res.status(201).json({
            data,
            message: "service created successfully",
            isSuccess: true,
        });

    } catch (error) {
        logError(error);
        return res.status(500).json({
            message: "Failed to create service",
            isSuccess: false,
        });
    }
};



exports.getService = async (req, res) => {
    try {
        const getData = await serviceSchema.find();
        const service = await serviceSchema.countDocuments();

        res.status(200).json({
            data: getData,
            totalCount: service,
            message: "service Retrieved Successfully",
            isSuccess: true,
        });
    } catch (error) {
        res.status(500).json({
            error,
            message: "Failed to Retrieve service",
            isSuccess: false,
        });
    }
}