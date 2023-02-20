const express = require ("express")
const router = express.Router()
const userCtrl = require('../Controllers/UserCtrl')


router.post('/login',userCtrl.login)
router.post('/register',userCtrl.register)
router.post('/updateCart',userCtrl.updateCart)
router.get('/getUser/:email',userCtrl.getUser)

module.exports = router;