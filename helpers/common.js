const fs = require("fs");
const path = require("path");

const deleteImage = (imagePath) => {
    const fullPath = path.join(__dirname, "../public", imagePath);
    fs.access(fullPath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error(`Image not found at ${fullPath}:`, err);
            return;
        }
        fs.unlink(fullPath, (err) => {
            if (err) {
                console.error(`Failed to delete image at ${fullPath}:`, err);
            } else {
                console.log(`Successfully deleted image at ${fullPath}`);
            }
        });
    });
};

const deleteFile = async (filePath) => {
    filePath = "./" + filePath;
    if (fs.existsSync(filePath)) {
        await fs.unlinkSync(filePath);
    }
};

const deleteFiles = async (files) => {
    if (files && files.length > 0) {
        await Promise.all(
            files.map(async (file) => {
                const filePath = "./" + file.path;
                if (fs.existsSync(filePath)) {
                    await fs.unlinkSync(filePath);
                }
            })
        );
    }
};

const uniqueFilename = async (file) => {
    let uniqueName = "";
    if (file) {
        uniqueName = `${Date.now()}-${Math.round(
            Math.random() * 1e9
        )}${path.extname(file.originalname)}`;
    }
    return uniqueName;
};

const convertFilePathSlashes = (filePath) => {
    return filePath.replace(/\\/g, "/");
};

module.exports = {
    deleteImage,
    deleteFile,
    deleteFiles,
    uniqueFilename,
    convertFilePathSlashes,
};
