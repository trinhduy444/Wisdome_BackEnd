const { BadRequestError, NotFoundError } = require("../../core/error.response");

const { OrderModel,OrderDetailModel } = require("../../models");

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

    const orderDetailData = {
      order_id: newOrder._id, // Sử dụng _id của đơn hàng mới tạo
      shipper_id: orderData.shipper_id,
      note: orderData.note,
      address_restaurant: orderData.address_restaurant,
      address_customer: orderData.address_customer,
      payment_name: orderData.payment_name,
      rating: orderData.rating,
    };

    const newOrderDetail = await OrderDetailModel.create(orderDetailData);

    if (!newOrderDetail) throw new BadRequestError("Create OrderDetail Error");
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
