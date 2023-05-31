import db from './database.js'

// Define the schema
const todoListSchema = new db.mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  owner: {
    type: db.mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const Todo = db.mongoose.model('Todo', todoListSchema)

export default Todo;