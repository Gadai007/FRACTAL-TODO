const route = require('express').Router()
const { Todo } = require('../models/TodoBucket')
const { getUserById } = require('../controllers/user')
const { getBucketById } = require('../controllers/bucket')
const { isSignin, isAuthenticated } = require('../controllers/auth')
const { getTodoById, getTodos, createTodo, updateTodo, deleteTodo, getATodo } = require('../controllers/todo')

route.param('id', getUserById)
route.param('bucketId', getBucketById)
route.param('todoId', getTodoById)

route.get('/todos/:bucketId/:id', isSignin, isAuthenticated, getTodos)
route.get('/atodo/:todoId/:bucketId/:id', isSignin, isAuthenticated, getATodo)
route.post('/todo/create/:bucketId/:id', isSignin, isAuthenticated, createTodo)
route.put('/todo/:todoId/:bucketId/:id', isSignin, isAuthenticated, updateTodo)
route.delete('/todo/:todoId/:bucketId/:id', isSignin, isAuthenticated, deleteTodo)

module.exports = route