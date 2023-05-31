import db from './database.js';
import pkg from 'bcryptjs';
const { hashSync } = pkg;

/**
 * User schema for defining the structure of the user object.
 */
const userSchema = new db.mongoose.Schema({
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

/**
 * User model representing the collection of users.
 */
const User = db.mongoose.model('User', userSchema);

export default User;
