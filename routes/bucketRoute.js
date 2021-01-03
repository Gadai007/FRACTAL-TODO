const route = require('express').Router()
const { isSignin, isAuthenticated } = require('../controllers/auth')
const { getUserById } = require('../controllers/user')
const { getBuckets, createBucket, getAbucket, getBucketById } = require('../controllers/bucket')

route.param('id', getUserById)
route.param('bucketId', getBucketById)

route.get('/buckets/:id', isSignin, isAuthenticated, getBuckets)
route.get('/bucket/:bucketId/:id', isSignin, isAuthenticated, getAbucket)
route.post('/bucket/create/:id', isSignin, isAuthenticated, createBucket)


module.exports = route