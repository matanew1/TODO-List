import mongoose, { connect } from 'mongoose';
import configuration from '../config/config.js';

const mongoURI = configuration.uri;

connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Failed to connect to MongoDB', error);
});

export default mongoose;