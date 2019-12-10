const router = require('express').Router()

const userModel = require('./user-model')



router.get('/', (req,res) => {
    
    userModel.find()
    .then(user => {
        res.status(201).json(user)
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
})



module.exports = router;