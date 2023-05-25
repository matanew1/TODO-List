import app from './app.js';
import configurations from './config/config.js';

const port = configurations.port;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});