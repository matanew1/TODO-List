// write to json file
import fs from "fs";
import json_path from "../../config/config";

function parseJSONFromFile(jsonFileName) {
  try {
    // Read JSON file
    const jsonData = fs.readFileSync(`${json_path}newUser.json`, "utf8");

    // Parse JSON string to object
    const parsedObject = JSON.parse(jsonData);

    return parsedObject;
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return null;
  }
}

export default parseJSONFromFile;
