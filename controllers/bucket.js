const { Bucket } = require('../models/TodoBucket')

const getBucketById = async (req, res, next, id) => {
    const bucket = await Bucket.findById(id).populate('user')
    if(bucket){
        req.bucket = bucket
        next()
    }else{
        res.status(400).json({ error: 'bucket not found in db'})
    }
}

const getBuckets = async (req, res) => {

    const buckets = await Bucket.find().populate('user', '_id name')
    if (buckets) {
        res.status(200).json(buckets)
    } else {
        res.status(400).json({ error: 'buckets not found' })
    }
}

const createBucket = async (req, res) => {
    req.body.user = req.profile
    const newBucket = new Bucket(req.body)
    const bucket = await newBucket.save()
    if(bucket){
        res.status(200).json(bucket)
    }else{
        res.status(400).json({ error: 'failed to create a bucket '})
    }
}

module.exports = {
    createBucket,
    getBuckets,
    getBucketById
}