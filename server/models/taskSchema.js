import db from './database.js'

// Define the schema
const taskschema = new db.mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    description: {
        type: String,
    }
})

const Task = db.mongoose.model('Task', taskschema)

export default Task;