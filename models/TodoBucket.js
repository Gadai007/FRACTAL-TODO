const mongoose = require('mongoose')

const { ObjectId } = mongoose.Schema.Types


const todoSchema = new mongoose.Schema({
   todo: [
       {
        checked: Boolean,
        text: String
       }
   ] 
})

const bucketSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        maxlength: 32,
    },
    todos: [todoSchema],
    user: {
        type: ObjectId,
        ref: 'user'
    }
}, {timestamps: true})

const Todo = mongoose.model('todo', todoSchema)

const Bucket = mongoose.model('bucket', bucketSchema)

module.exports = {
    Todo,
    Bucket
}