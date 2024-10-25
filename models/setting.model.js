const mongoose = require('mongoose');

const settingSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },

        phone: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            trim: true
        },
        address: {
            type: String,
            trim: true
        },
        headerLogo: {
            type: String,
            trim: true
        },
        footerLogo: {
            type: String,
            trim: true
        },
        favicon: {
            type: String,
            trim: true
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('setting', settingSchema)