const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            trim: true
        },
        phone: {
            type: String,
            required: true,
            trim: true
        },
        title: {
            type: String,
            required: true,
            trim: true
        },
        subTitle: {
            type: String,
            required: true,
            trim: true
        },
        address: {
            type: String,
            required: true,
            trim: true
        },
        time: {
            type: String,
            required: true,
            trim: true
        },
        icon: {
            type: String,
            required: true,
            trim: true
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('contact', contactSchema);