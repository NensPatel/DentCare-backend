const mongoose = require('mongoose');

const socialData = [
    'Facebook',
    'Twitter',
    'Instagram',
    'Linkedin']

const teamSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        image: {
            type: String,
            required: true,
            trim: true
        },
        position: {
            type: String,
            required: true,
            trim: true
        },
        socialmedia: {
            type: String,
            required: true,
            trim: true,
            enum: socialData
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('team', teamSchema)