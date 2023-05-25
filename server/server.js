import app from './app.js';
import configurations from './config/config.js';

/**
 * Retrieves the port from the configuration and starts the server.
 */
const port = configurations.port;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
