const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true
        },
        image: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        work: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('testimonial', testimonialSchema)