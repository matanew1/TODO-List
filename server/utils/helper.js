// write to json file
import { writeFile } from 'fs';

const writeToFile = (data) => {
    writeFile('data.json', JSON.stringify(data), (err) => {
        if (err) throw err;
        console.log('The file was saved!');
    });
}