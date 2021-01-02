const mongoose = require('mongoose')

const { ObjectId } = mongoose.Schema.Types


const todoSchema = new mongoose.Schema({
    bucket: {
        type: ObjectId,
        ref: 'bucket'
    },
    todo: {
            type: String,
            maxlength: 32,
        }
})

const bucketSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        maxlength: 32,
    },
    user: {
        type: ObjectId,
        ref: 'user'
    }
}, { timestamps: true })

const Todo = mongoose.model('todo', todoSchema)

const Bucket = mongoose.model('bucket', bucketSchema)

module.exports = {
    Todo,
    Bucket
}