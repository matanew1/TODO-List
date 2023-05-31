import db from './database.js';

/**
 * Task schema for defining the structure of the task object.
 */
const taskschema = new db.mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  todo: {
    type: db.mongoose.Schema.Types.ObjectId,
    ref: 'Todo',
    required: true
  }
});

/**
 * Task model representing the collection of tasks.
 */
const Task = db.mongoose.model('Task', taskschema);

export default Task;
