const express = require("express");
const router = express.Router();
const { createOrderDetail,
    getOrderDetail
    } = require("../controllers/orderDetail.controller");
const { authentication } = require("../auth/authUntil");


router.use(authentication);
router.route('/createOrderDetail').post(createOrderDetail);

router.route('/getOderDetail').post(getOrderDetail);

module.exports = router;
