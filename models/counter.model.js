const mongoose = require('mongoose');

const counterSchema = new mongoose.Schema(
    {
        count: {
            type: Number,
            default: 0
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

module.exports = mongoose.model('counter', counterSchema)