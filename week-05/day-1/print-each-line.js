// Írj egy programot, ami megnyit egy 'my-file.txt' nevű fájlt
// majd kiír minden sort a fájlból.
// Ha a program nem tud olvasni a fájlból (pl.: mert nem létezik),
// akkor írja ki, hogy: 'Unable to read file: my-file.txt'

const fs = require('fs');


function printFileContent(fileName) {
    try {
        let fileContent = fs.readFileSync(fileName, 'utf8');
        console.log(fileContent);
    } catch (error) {
        console.log(`Unable to read file: ${fileName}`);
    }
}

printFileContent('./my-file.txt');