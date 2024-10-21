const mongoose = require('mongoose');

const whyChooseUsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        image: {
            type: String,
            required: true,
            trim: true,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('WhyChooseUs', whyChooseUsSchema);
