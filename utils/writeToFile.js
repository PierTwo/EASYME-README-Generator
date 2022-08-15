const fs = require('fs')

function writeToFile(fileName, data) {
    fs.writeFile(`./output/${fileName}.md`, data, (err) =>
        err ? console.error(err) : console.log(`README generated to ./output/${fileName}`));
};

module.exports = writeToFile;