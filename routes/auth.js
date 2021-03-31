const express = require('express');
const router = express.Router();

const { register, login } = require("../controllers/auth"); 

router.route("/reigster").post(register);

router.route("/login").post(login);

module.exports = router;