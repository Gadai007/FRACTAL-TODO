const route = require('express').Router()

const { getUserById, getUser } = require('../controllers/user')
const { isAuthenticated, isSignin } = require('../controllers/auth')

route.param('id', getUserById)

route.get('/user/:id', isSignin, isAuthenticated, getUser)

module.exports = route