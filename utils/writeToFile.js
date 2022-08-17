// Imports the required module in order to write to the file
const fs = require('fs')

// Function to write the markdown file using the arguments passed to it
function writeToFile(fileName, data) {
    // Uses fileName parameter to give the markdown file its name and output it to the output folder
    // Uses the data parameter to give the markdown as the content of the file
    fs.writeFile(`./output/${fileName}.md`, data, (err) =>
        // Uses err as a callback to print an error if one occurs, otherwise log the relative path of the file generated if successful
        err ? console.error(err) : console.log(`README generated to ./output/${fileName}.md`));
};

// Modularize and export writeToFile
module.exports = writeToFile;