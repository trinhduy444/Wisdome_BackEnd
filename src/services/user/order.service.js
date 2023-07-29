const { BadRequestError, NotFoundError } = require("../../core/error.response");

const { OrderModel } = require("../../models");

class OrderService {
  static async createOrder(req) {
    const customerId = req.user.userId;
    const orderData = req.body;
    const newOrder = await OrderModel.create({
        customer_id: customerId,
        image_shop: orderData.image_shop,
        shop_name: orderData.shop_name,
        totalPrice: orderData.totalPrice,
        date_order: orderData.date_order,
        time_order: orderData.time_order,
        food_name: orderData.food_name,
        food_amount: orderData.food_amount,
        });
    if (!newOrder) throw new BadRequestError("Create Order Error");
    return newOrder;

  }
  static async getAllOrders(req, res) {
    const customerId = req.user.userId; 
    const orders = await OrderModel.find({
      customer_id: customerId
    })
    if(orders.length === 0){
        return "No orders found for this customer";
    }
    return orders;
  } 
}

module.exports = OrderService;
