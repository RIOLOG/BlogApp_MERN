const express = require('express');
const { getAllUsers, registerController, loginController } = require('../controllers/userContoller');


//router object
const router = express.Router();


//APISS:
router.get('/all-users', getAllUsers)


router.post('/register', registerController)


router.post('/login', loginController)



module.exports = router