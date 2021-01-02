const { Todo } = require('../models/TodoBucket')

const getTodoById = async (req, res, next, id ) => {
    const todo = await Todo.findById(id).populate('bucket')
    if(todo){
        req.todo = todo
        next()
    }else{
        res.status(400).json({ error: 'todo not found in db'})
    }
}

const getTodos = async ( req, res )=> {
    const todos = await Todo.find({ bucket: { _id: req.bucket._id}}).populate('bucket', '_id name')
    if(todos){
        res.status(200).json(todos)
    }else{
        res.status(400).json({ error: 'Todos not found'})
    }
}

const createTodo = async (req, res) => {
    req.body.bucket = req.bucket
    const newTodo = new Todo(req.body)
    const todo = await newTodo.save()
    if(todo){
        res.status(200).json(todo)
    }else{
        res.status(400).json({ error: 'failed to create a todo'})
    }
}

const updateTodo = async (req, res) => {
    const todo = await Todo.findByIdAndUpdate({ _id: req.todo._id }, {$set: req.body}, {new: true, useFindAndModify: false})
    if(todo){
        res.status(200).json(todo)
    }else{
        res.status(400).json({ error: 'failed to update a todo'})
    }
}

const deleteTodo = async ( req, res) => {
    const todo = await Todo.findByIdAndDelete(req.todo._id)
    if(todo){
        res.status(200).json(todo)
    }else{
        res.status(400).json({ error: 'failed to delete a todo'})
    }
}

module.exports = {
    getTodoById,
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
}