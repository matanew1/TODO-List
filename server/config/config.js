/**
 * Configuration object for the application.
 */
const configuration = {
  isDocker: process.env.DOCKER === "true",
  port: 8080,
  uri: `mongodb://${
    process.env.DOCKER === "true" ? "database" : "127.0.0.1"
  }:27017/todoDB`,
  json_path: "./tests/utils/",
};

export default configuration;
