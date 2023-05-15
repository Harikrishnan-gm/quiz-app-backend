const express=require('express')

const router=new express.Router()
const userController=require('../controller/userController')

router.post('/users',userController.registeruser)

router.post('/login',userController.login)

router.get('/topper',userController.Top)
module.exports=router