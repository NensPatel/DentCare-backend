const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
        const uniqueImg = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueImg + '-' + file.originalname);
    },
})

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/webp' ||
        file.mimetype === 'image/gif' ||
        file.mimetype === 'image/svg' ||
        file.mimetype === 'video/mp4' ||
        file.mimetype === 'video/webm' ||
        file.mimetype === 'video/ogg' ||
        file.mimetype === 'video/avi' ||
        file.mimetype === 'video/mkv' ||
        file.mimetype === 'video/3gp'
    ) {
        return cb(null, true)
    }
    else {
        cb(new Error('Only images are allowed!!'));
    }
}

// Accordion
const uploadAccordionImg = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 10000000 * 5 },
}).single('image');


// Testimonial
const uploadTestimonialImg = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 10000000 * 5 },
}).single('image');

module.exports = { uploadAccordionImg, uploadTestimonialImg };