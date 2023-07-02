const express = require("express");
const router = express.Router();
const { checkAuthIsUser } = require("../auth/authUntil");
const {
    updateInformaiton
} = require("../controllers/user.controller");


router.use(checkAuthIsUser);

router.route('/updateInfor').post(updateInformaiton);

module.exports = router;