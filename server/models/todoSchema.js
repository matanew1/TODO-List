import db from './database.js'

// Define the schema
const todoListSchema = new db.mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    tasks: [{
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      completed: {
        type: Boolean,
        default: false
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
      }],
    user:{
        type: db.mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
})

const Todo = db.mongoose.model('Todo', todoListSchema)

export default Todo;