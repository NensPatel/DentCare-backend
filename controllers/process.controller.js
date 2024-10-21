const processSchema = require('../models/process.model');
const { convertFilePathSlashes } = require('../helpers/common');

const logError = (error) => {
    console.error('Error: ', error);
};

exports.createProcess = async (req, res) => {
    const { title, description } = req.body;

    if (!req.file) {
        return res.status(400).json({
            message: "No file uploaded",
            isSuccess: false,
        });
    }

    if (!title || !description) {
        return res.status(400).json({
            message: "Title and Description are required",
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
            description,
            image: filePath,
        };

        const data = new processSchema(createObj);
        await data.save();

        return res.status(201).json({
            data,
            message: "Process created successfully",
            isSuccess: true,
        });

    } catch (error) {
        logError(error);
        return res.status(500).json({
            message: "Failed to create process",
            isSuccess: false,
        });
    }
};



exports.getProcess = async (req, res) => {
    try {
        const getData = await processSchema.find();
        const process = await processSchema.countDocuments();

        res.status(200).json({
            data: getData,
            totalCount: process,
            message: "Process Retrieved Successfully",
            isSuccess: true,
        });
    } catch (error) {
        res.status(500).json({
            error,
            message: "Failed to Retrieve Process",
            isSuccess: false,
        });
    }
}