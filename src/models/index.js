const FoodModel = require("./collections/food.model");
const FoodTypeModel = require("./collections/foodtype.model");
const DiscountModel = require("./collections/discount.model");
const OrderModel = require("./collections/order.model");
const OrderDetailModel = require("./collections/orderdetail.model");
const PaymentModel = require("./collections/payment.model");
const RatingModel = require("./collections/rating.model");
const ShipperModel = require("./collections/shipper.model");
const ShippingModel = require("./collections/shipping.model");
const ShopModel = require("./collections/shop.model");
const SiteModel = require("./collections/site.model");
const KeyTokenModel = require("./collections/keytoken.model");
const ShopingCart = require("./collections/shopingCart.model")

module.exports = {
  KeyTokenModel,
  FoodModel,
  FoodTypeModel,
  DiscountModel,
  OrderModel,
  OrderDetailModel,
  PaymentModel,
  RatingModel,
  ShipperModel,
  ShippingModel,
  ShopModel,
  SiteModel,
  ShopingCart
};
