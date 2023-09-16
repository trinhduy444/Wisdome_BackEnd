const { BadRequestError, NotFoundError } = require("../../core/error.response");
const { ShipperModel,ShopModel,OrderDetailModel,OrderModel } = require("../../models");
const { authentication } = require("../../auth/authUntil"); // Import logic xác thực JWT

class deliveryService{

    static async getAllOrder(req, res) {
      try {
        const customerId = req.user.userId;
  
        const orderDetails = await OrderDetailModel.find({ shipper_id: customerId });

        const orderIds = orderDetails.map((orderDetail) => orderDetail.order_id);
  
        const orders = await OrderModel.find({ _id: { $in: orderIds } });
  
        return res.json(orders);
      } catch (error) {
        return res.status(error.status || 500).json({ message: error.message });
      }
    }
}

module.exports = deliveryService;