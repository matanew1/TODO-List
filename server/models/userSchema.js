import mongoose from './database.js';
import pkg from 'bcryptjs';
const { hashSync } = pkg;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    set: (value) => {
      const hashedPassword = hashSync(value, 10);
      return hashedPassword;
    }
  }
});

const User = mongoose.model('User', userSchema);

export default User;
