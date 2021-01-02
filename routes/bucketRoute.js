const route = require('express').Router()
const { isSignin, isAuthenticated } = require('../controllers/auth')
const { getUserById } = require('../controllers/user')
const { getBuckets, createBucket } = require('../controllers/bucket')

route.param('id', getUserById)

route.get('/buckets/:id', isSignin, isAuthenticated, getBuckets)
route.post('/bucket/create/:id', isSignin, isAuthenticated, createBucket)


module.exports = route