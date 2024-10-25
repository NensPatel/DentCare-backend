const mongoose = require('mongoose');

const socialmediaSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true
        },
        icon: {
            type: String,
            trim: true
        },
        url: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('socialmedia', socialmediaSchema)