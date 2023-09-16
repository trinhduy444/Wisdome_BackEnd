const express = require("express");
const router = express.Router();
const { getShipperProfile ,updateShipperProfile} = require("../../controllers/driver.controller");
const { authentication } = require("../../auth/authUntil");

router.use(authentication);

router.route('/getInfor').post(getShipperProfile);
router.route('/updateInfor').post(updateShipperProfile);


module.exports = router;
