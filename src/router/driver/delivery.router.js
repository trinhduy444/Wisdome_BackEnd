const express = require("express");
const router = express.Router();
const {getAllOrder } = require("../../controllers/driver.controller");
const { authentication } = require("../../auth/authUntil");

router.use(authentication);

router.route('/getAllOrders').post(getAllOrder);


module.exports = router;
