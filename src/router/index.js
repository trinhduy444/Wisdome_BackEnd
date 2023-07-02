const express = require("express");
const router = express.Router();
const path = require('path');

const authRouter = require("./auth.route");
const shopRouter = require("./shop.route");
const adminRouter = require("./admin.router");
const discountRouter = require("./discount.route");
const shoppingCart = require("./shopingCart.router")
const userRouter = require("./user.router");

router.use("/banhMi",(req, res) => {
    const imagePath = path.join(__dirname, '../images/BanhMi.jpg');
    res.sendFile(imagePath);
  })
router.use("/api/v1/auth", authRouter);
router.use("/api/v1/shop", shopRouter);
router.use("/api/v1/admin", adminRouter);
router.use("/api/v1/discount", discountRouter);
router.use("/api/v1/shoppingCart", shoppingCart);
router.use("/api/v1/user", userRouter)

module.exports = router;
