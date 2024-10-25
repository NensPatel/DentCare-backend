const socialmediaSchema = require('../models/socialmedia.model');

const logError = (error) => {
    console.error('Error: ', error)
}

exports.createSocialMedia = async (req, res) => {
    const { name, icon, url } = req.body

    try {
        const createObj = {
            name,
            icon,
            url
        }

        const socialmedia = new socialmediaSchema(createObj)
        const data = await socialmedia.save()
        return res.status(200).send({
            data,
            message: "Social media created successfully",
            isSuccess: true
        })

    } catch (error) {
        logError(error)
        return res.status(500).send({
            message: "Error creating social media",
            isSuccess: false
        })
    }
}

