const express = require("express");
const router = express.Router();
const { checkAuthIsUser } = require("../auth/authUntil");
const {
    updateInformaiton, getInformation
} = require("../controllers/user.controller");
// const { updateInformaiton,getInformatiton } = require("../services/user/profile.service");


// router.use(checkAuthIsUser);

router.route('/updateInfor').post(updateInformaiton);
router.route('/getInfor').post(getInformation);

module.exports = router;