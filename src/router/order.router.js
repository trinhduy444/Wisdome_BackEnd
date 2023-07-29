const express = require("express");
const router = express.Router();
const { createOrder,
    getAllOrders
    } = require("../controllers/order.controller");
const { authentication } = require("../auth/authUntil");


router.use(authentication);
router.route('/createOrder').post(createOrder);

router.route('/getAllOrders').post(getAllOrders);

module.exports = router;
