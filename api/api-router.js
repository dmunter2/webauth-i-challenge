const router = require('express').Router()

const authRouter = require('../auth/auth-router')

const userRouter = require('../users/user-router')


router.use('/auth', authRouter);
router.use('/user', userRouter);

router.get('/', (req,res) => {
    res.json({message: "its alive!"})
})


module.exports = router;