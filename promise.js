const fs = require('fs').promises;
async function writefile() {
    try {
        await fs.writeFile('promise.txt', "hello everyone");

        console.log("File is written successfully");
    }

    catch (error) {
        console.error("Error ", error);
    }
}
writefile();


async function readfile() {
    try {
        const data = await fs.readFile('promise.txt', 'utf8');

        console.log("File content is:");
        console.log(data);
    }
    catch (error) {
        console.error("Error", error);
    }
}
readfile();

const fs = require('fs').promises;
async function appendfile() {
    try {
        await fs.appendFile('promise.txt', '\nWelcome to full stack development');
        console.log("File appended successfully");
    }
    catch (error) {
        console.error("Error", error);
    }
}
appendfile();