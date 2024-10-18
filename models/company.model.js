const mongoose = require('mongoose');

const companySchema = new mongoose.Schema(
    {
        image: {
            type: String,
            trim: true,
            require: true,
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('company', companySchema);