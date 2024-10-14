const mongoose = require('mongoose');

const tempData = ['Consultation', 'Therapy', 'Diagnosis', 'Follow-up']

const appointmentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    service: {
        type: String,
        required: true,
        trim: true,
        enum: tempData,

    },
    date: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model('appointment', appointmentSchema)