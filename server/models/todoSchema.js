import db from './database.js';

/**
 * Todo list schema for defining the structure of the todo list object.
 */
const todoListSchema = new db.mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  owner: {
    type: db.mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  tasks: [{
    type: db.mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }]
});

/**
 * Todo model representing the collection of todo lists.
 */
const Todo = db.mongoose.model('Todo', todoListSchema);

export default Todo;
