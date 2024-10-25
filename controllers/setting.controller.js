const settingSchema = require('../models/setting.model');
const { convertFilePathSlashes, deleteFile } = require('../helpers/common');
const fs = require('fs');
const path = require('path');

exports.updateSetting = async (req, res) => {
    try {
        const { title, description, phone, email, address } = req.body;

        const findData = await settingSchema.findOne();

        const updateObj = {
            title,
            description,
            phone,
            email,
            address
        }

        const updateLogo = async (newFile, oldPath, fieldName) => {
            if (newFile) {
                const newPath = convertFilePathSlashes(path.join('public/setting', fieldName, newFile.filename));
                updateObj[fieldName] = newPath;

                if (oldPath) {
                    try {
                        await fs.access(path.join('/public', oldPath));
                        await deleteFile(oldPath);
                        console.log(`Successfully deleted old image: ${oldPath}`);
                    } catch (error) {
                        if (error.code === 'ENOENT') {
                            console.log(`Old file not found, skipping deletion: ${oldPath}`);
                        }
                        else {
                            console.error(`Error deleting old image:${oldPath}`, error);
                        }
                    }
                }
            }
        }

        // Handle headerLogo
        if (req.files && req.files.headerLogo) {
            await updateLogo(req.files.headerLogo[0], findData?.headerLogo, 'headerLogo');
        }

        // Handle footerLogo
        if (req.files && req.files.footerLogo) {
            await updateLogo(req.files.footerLogo[0], findData?.footerLogo, 'footerLogo');
        }

        // Handle favicon
        if (req.files && req.files.favicon) {
            await updateLogo(req.files.favicon[0], findData?.favicon, 'favicon');
        }

        if (findData) {
            //Update existing setting
            const setting = await settingSchema.findByIdAndUpdate(findData._id, updateObj, { new: true });
            return res.status(200).send({
                data: setting,
                message: "Setting updated successfully",
                isSuccess: true
            })
        } else {
            const settingData = new settingSchema(updateObj);
            const newSetting = await settingData.save();

            return res.status(200).send({
                data: newSetting,
                message: "Setting created successfully",
                isSuccess: true
            })
        }

    } catch (error) {
        console.error("Error in update setting", error);
        return res.status(500).send({
            error: error.message,
            message: "Failed to update setting",
            isSuccess: false
        })
    }
}

exports.getSetting = async (req, res) => {
    try {
        const setting = await settingSchema.findOne();
        return res.status(200).send({
            data: setting,
            message: "Setting retrieved successfully",
            isSuccess: true
        })
    } catch (error) {
        console.error("Error in get setting", error);
        return res.status(500).send({
            error: error.message,
            message: "Failed to get setting",
            isSuccess: false
        })
    }
}