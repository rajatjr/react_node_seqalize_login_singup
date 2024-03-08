const express = require('express')
const { Singup, Login } = require("../Controlers/Users");
const router = express.Router();
router.post('/sign-up', Singup);
router.post('/login', Login);
// router.post('/logout', Logout);
// router.post('/forget', forget);
// router.post('/changepassword', changepassword);

module.exports = router;