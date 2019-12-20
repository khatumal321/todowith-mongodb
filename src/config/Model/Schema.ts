import * as mongoose from 'mongoose';
const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    isDone: Boolean,
})
const Todo = mongoose.model('Todo', TodoSchema);
export default Todo
