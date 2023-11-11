const express = require('express')
const router =  express.Router()
const controllers = require('../controllers/usersControllers')
const upload = require('../multer/storageConfig')

// register 

router.post('/user/register',controllers.userpost)

router.get('/user/details',controllers.userGet)

router.get('/user/:id', controllers.getSingleUser)

router.put('/user/edit/:id', controllers.useredit)

router.delete('/user/delete/:id', controllers.userDelete)

module.exports = router  