const WhyChooseUs = require('../models/whychooseus.model');
const { convertFilePathSlashes } = require('../helpers/common');

const logError = (error) => {
    console.error('Error: ', error);
};

exports.createWhyChooseUs = async (req, res) => {
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

        const data = new WhyChooseUs(createObj);
        await data.save();

        return res.status(201).json({
            data,
            message: "Why choose us created successfully",
            isSuccess: true,
        });

    } catch (error) {
        logError(error);
        return res.status(500).json({
            message: "Failed to create why choose us",
            isSuccess: false,
        });
    }
};


exports.getWhychooseus = async (req, res) => {
    try {
        const getData = await WhyChooseUs.find();
        const whychooseus = await WhyChooseUs.countDocuments();

        res.status(200).json({
            data: getData,
            totalCount: whychooseus,
            message: "Why choose us Retrieved Successfully",
            isSuccess: true,
        });
    } catch (error) {
        res.status(500).json({
            error,
            message: "Failed to Retrieve Why choose us",
            isSuccess: false,
        });
    }
}