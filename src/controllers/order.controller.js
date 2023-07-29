const { CREATED,OK } = require("../core/success.response");
const OrderService = require("../services/user/order.service");

const createOrder = async (req, res) => {
  try {
    const createdOrder = await OrderService.createOrder(req);
    new CREATED({
      message: "Create Order Successfully",
      metadata: createdOrder,
    }).send(res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllOrders = async (req, res) =>{
  new OK({
    message: "Get All Your Orders Successfully",
    metadata: await OrderService.getAllOrders(req, res),
  }).send(res);
}

module.exports = { createOrder,getAllOrders };
