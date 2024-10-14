const mongoose = require('mongoose');

const accordionSchema = new mongoose.Schema(
    {
        image: {
            type: Number,
            trim: true
        },
        title: {
            type: String,
            trim: true,
        },
        subTitle: {
            type: String,
            trim: true,
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('accordion', accordionSchema)