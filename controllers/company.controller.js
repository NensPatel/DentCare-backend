const { convertFilePathSlashes } = require("../helpers/common");
const companySchema = require("../models/company.model");

exports.createCompany = async (req, res) => {
    if (!req.file) {
        return res.status(400).send({
            message: "No file uploaded",
            isSuccess: false
        });
    }
    try {
        let createObj = {};
        // createObj.image = "uploads/" + req.file.filename;
        const filePath = convertFilePathSlashes(req.file.path);

        if (!filePath) {
            return res.status(400).send({
                isSuccess: false,
                message: "Image path is required.",
            });
        }

        createObj.image = filePath;

        const data = new companySchema(createObj);
        await data.save();

        return res.status(201).send({
            data,
            message: "Company created successfully",
            isSuccess: true
        });
    } catch (error) {
        return res.status(500).send({
            error,
            message: "Error while creating company",
            isSuccess: false
        });
    }
};


exports.getCompany = async (req, res) => {
    try {
        const getData = await companySchema.find();
        const companies = await companySchema.countDocuments();

        res.status(200).json({
            data: getData,
            totalCount: companies,
            message: "Companies retrieved successfully",
            isSuccess: true
        });
    } catch (error) {
        return res.status(500).send({
            error: error.message,
            message: "Error while getting company",
            isSuccess: false
        });
    }
};
