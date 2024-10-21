const teamSchema = require('../models/team.model');
const { convertFilePathSlashes } = require('../helpers/common');

const logError = (error) => {
    console.error('Error: ', error);
}

exports.createTeam = async (req, res) => {
    const { name, position, socialmedia } = req.body;

    if (!req.file) {
        return res.status(400).send({
            message: 'No file uploaded',
            isSuccess: false
        });
    }

    if (!name || !position) {
        return res.status(400).send({
            message: 'Name and position are required',
            isSuccess: false
        });
    }

    try {
        const createObj = {
            name,
            position,
            socialmedia
        };

        const filePath = convertFilePathSlashes(req.file.path);

        if (!filePath) {
            return res.status(400).send({
                isSuccess: false,
                message: 'Invalid file path'
            });
        }

        createObj.image = filePath;

        const data = new teamSchema(createObj);
        await data.save();

        return res.status(201).send({
            data,
            message: 'Team created successfully',
            isSuccess: true
        });

    } catch (error) {
        logError(error);
        return res.status(500).send({
            message: 'Failed to create Team due to server error',
            isSuccess: false
        });
    }
};


exports.getTeam = async (req, res) => {
    try {
        const getData = await teamSchema.find();
        const teams = await teamSchema.countDocuments();
        res.status(200).json({
            data: getData,
            totalCount: teams,
            message: 'Team retrieved successfully',
            isSuccess: true
        });
    } catch (error) {
        return res.status(500).send({
            error,
            message: 'Failed to get Team due to server error',
            isSuccess: false
        });
    }
}   