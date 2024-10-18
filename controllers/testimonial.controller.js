const { convertFilePathSlashes } = require("../helpers/common");
const testimonialSchema = require("../models/testimonial.model");

const logError = (error) => {
    console.error('Error: ', error);
};

//POST API
exports.createTestimonial = async (req, res) => {
    const { name, description, work } = req.body;

    if (!req.file) {
        return res.status(400).send({
            message: "No file uploaded",
            isSuccess: false
        })
    }
    if (!name) {
        return res.status(400).send({
            message: "Name is required",
            isSuccess: false
        })
    }
    if (!description) {
        return res.status(400).send({
            message: "Description is required",
            isSuccess: false
        })
    }
    if (!work) {
        return res.status(400).send({
            message: "Work is required",
            isSuccess: false
        })
    }

    try {
        const createObj = {
            name,
            description,
            work
        };

        const filePath = convertFilePathSlashes(req.file.path);

        if (!filePath) {
            return res.status(400).send({
                message: "Image path is required",
                isSuccess: false
            })
        }

        createObj.image = filePath
        const data = new testimonialSchema(createObj);
        await data.save();

        return res.status(201).send({
            data,
            message: "Testimonial created successfully",
            isSuccess: true
        })
    } catch (error) {
        logError(error);
        return res.status(500).send({
            message: "Error while creating Testimonial",
            isSuccess: false
        })
    }
}


// GET API
exports.getTestimonial = async (req, res) => {
    try {
        const getData = await testimonialSchema.find();
        const testimonials = await testimonialSchema.countDocuments();
        res.status(200).json({
            data: getData,
            totalCount: testimonials,
            message: "Testimonial retrieved successfully",
            isSuccess: true
        })
    } catch (error) {
        return res.status(500).send({
            error,
            message: "Error while getting Testimonial",
            isSuccess: false
        })
    }
}