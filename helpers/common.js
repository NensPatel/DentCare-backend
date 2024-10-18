const fs = require('fs');
const path = require('path');

exports.convertFilePathSlashes = (filePath) => {
    return filePath.replace(/\\/g, "/"); // Ensure the correct file path format
};

// Helper to create unique filenames for uploaded files
exports.uniqueFilename = async (file) => {
    let uniqueName = "";
    if (file) {
        uniqueName = `${Date.now()}-${Math.round(
            Math.random() * 1e9
        )}${path.extname(file.originalname)}`; // e.g., 3746674586-836534453.png
    }
    return uniqueName;
};
