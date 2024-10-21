const mongoose = require('mongoose');
const processSchema = new mongoose.Schema({
    image: {
        type: String,
        trim: true
    },
    title: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});
module.exports = mongoose.model('process', processSchema)