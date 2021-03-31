const express = require('express');
const router = express.Router();

const { register } = require("../controllers/auth"); 

router.route("/reigster").post();

module.exports = router;