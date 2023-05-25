// write to json file
import fs from 'fs';

/**
 * Parses a JSON file and returns the parsed object.
 * @param {string} jsonFileName - The name of the JSON file to parse.
 * @returns {object|null} - The parsed JSON object, or null if there was an error.
 */
function parseJSONFromFile(jsonFileName) {
  try {
    // Read JSON file
    const jsonData = fs.readFileSync(jsonFileName, 'utf8');

    // Parse JSON string to object
    const parsedObject = JSON.parse(jsonData);

    return parsedObject;
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return null;
  }
}

export default parseJSONFromFile;
