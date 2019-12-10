const router = require('express').Router()
const bcrypt = require('bcryptjs')
const userModel = require('../users/user-model')

router.post('/register', (req,res) => {
    const user = req.body
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash
    
    userModel.add(user)
    .then(user => {
        res.status(201).json({message: "it worked"})
    })
    .catch(error => {
        res.status(201).json({error: err})
    })
})




router.post('/login', (req,res) => {

    let {username, password} = req.body

    
    userModel.findBy({ username })
    .first()
    .then(user => {
       if (user && bcrypt.compareSync(password, user.password)){
            res.status(201).json({message: `Welcome ${user.username}`})
       } else (res.status(500).json({message: "there was an error"}))
    })
    .catch(err => {
        res.status(500).json(err)
    })
})



module.exports = router;