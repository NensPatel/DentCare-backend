const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        image: {
            type: String,
            required: true,
            trim: true
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('service', serviceSchema)