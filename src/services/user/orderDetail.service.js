const { BadRequestError, NotFoundError } = require("../../core/error.response");

const { OrderDetailModel } = require("../../models");

class OrderDetailService {
  static async createOrderDetail(req) {
    const customerId = req.user.userId;
    const orderData = req.body;
    const newOrderDetail = await OrderDetailModel.create({
        order_id: orderData.order_id,
        shipper_id: orderData.shipper_id,
        note: orderData.note,
        address_restaurant: orderData.address_restaurant,
        address_customer: orderData.address_customer,
        payment_name: orderData.payment_name,
        rating: orderData.rating,
        });
    if (!newOrderDetail) throw new BadRequestError("Create Order Detail Error");
    return newOrderDetail;

  }
  static async getOrderDetail(req, res) {
    const orderid = req.body.order_id; 
    const orderDetail = await OrderDetailModel.findOne({
      order_id: orderid
    })
    if(!orderDetail){
        return "No orderDetails found for this customer";
    }
    return orderDetail;
  } 
}

module.exports = OrderDetailService;
