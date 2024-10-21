const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { uniqueFilename } = require('../helpers/common');

const folderPaths = {
    accordion: path.join(__dirname, '../public/accordion'),
    company: path.join(__dirname, '../public/company'),
    testimonial: path.join(__dirname, '../public/testimonial'),
    whychooseus: path.join(__dirname, '../public/whychooseus'),
    process: path.join(__dirname, '../public/process'),
    service: path.join(__dirname, '../public/service'),
};

// Central file filter function
const fileFilter = (req, file, cb) => {
    const validMimeTypes = [
        "image/png",
        "image/jpg",
        "image/jpeg",
        "image/webp",
        "image/gif",
        "image/svg",
        "video/mp4",
        "video/webm",
        "video/ogg",
        "video/avi",
        "video/mkv",
        "video/3gp"
    ];

    if (validMimeTypes.includes(file.mimetype)) {
        return cb(null, true);
    } else {
        return cb(new Error("Only images or videos are allowed!"));
    }
};

// Dynamic storage function for multer
const dynamicStorage = (entityType) => {
    return multer.diskStorage({
        destination: (req, file, cb) => {
            const folderPath = folderPaths[entityType];

            if (folderPath) {
                if (!fs.existsSync(folderPath)) {
                    fs.mkdirSync(folderPath, { recursive: true }); // Create folder if it doesn't exist
                }
                cb(null, folderPath);
            } else {
                cb(new Error("Invalid entity type or fieldname"));
            }
        },
        filename: async (req, file, cb) => {
            const filename = await uniqueFilename(file);
            cb(null, filename);
        },
    });
};

// Multer upload configurations for different entities
const uploadConfiguration = {
    accordion: multer({
        storage: dynamicStorage('accordion'),
        limits: { fileSize: 10000000 * 5 },
        fileFilter: fileFilter
    }).single('image'),
    company: multer({
        storage: dynamicStorage('company'),
        limits: { fileSize: 10000000 * 5 },
        fileFilter: fileFilter
    }).single('image'),
    testimonial: multer({
        storage: dynamicStorage('testimonial'),
        limits: { fileSize: 10000000 * 5 },
        fileFilter: fileFilter
    }).single('image'),
    whychooseus: multer({
        storage: dynamicStorage('whychooseus'),
        limits: { fileSize: 10000000 * 5 },
        fileFilter: fileFilter
    }).single('image'),
    process: multer({
        storage: dynamicStorage('process'),
        limits: { fileSize: 10000000 * 5 },
        fileFilter: fileFilter
    }).single('image'),
    service: multer({
        storage: dynamicStorage('service'),
        limits: { fileSize: 10000000 * 5 },
        fileFilter: fileFilter
    }).single('image')
};

// Multer configuration for no image upload
const noImg = multer().none();

module.exports = {
    uploadAccordionImg: uploadConfiguration.accordion,
    uploadCompanyImg: uploadConfiguration.company,
    uploadTestimonialImg: uploadConfiguration.testimonial,
    uploadWhyChooseUsImg: uploadConfiguration.whychooseus,
    uploadProcessImg: uploadConfiguration.process,
    uploadServiceImg: uploadConfiguration.service,
    noImg
};
