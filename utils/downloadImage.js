const fs = require('fs')
const path = require('path')
const axios = require('axios')

async function downloadImage(url, filename, folder, dirname) {
    const fileName = path.basename(filename);
    const downloadPath = path.resolve(dirname, folder, fileName);
    try {
        const response = await axios({
            url,
            method: 'GET',
            responseType: 'stream'
        });
        const writer = fs.createWriteStream(downloadPath);
        response.data.pipe(writer);
    } catch (err) {
        console.log("Error downloading file ", url, " skipping...");
    }
}

module.exports = {
    downloadImage
}