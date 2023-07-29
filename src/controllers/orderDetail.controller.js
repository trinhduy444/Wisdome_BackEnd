const { CREATED,OK } = require("../core/success.response");
const OrderDetailService = require("../services/user/orderDetail.service");

const createOrderDetail = async (req, res) => {
  try {
    const createdOrderDetail = await OrderDetailService.createOrderDetail(req);
    new CREATED({
      message: "Create Order Successfully",
      metadata: createdOrderDetail,
    }).send(res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOrderDetail = async (req, res) =>{
  new OK({
    message: "Get Your OrderDetail Successfully",
    metadata: await OrderDetailService.getOrderDetail(req, res),
  }).send(res);
}

module.exports = { createOrderDetail,getOrderDetail };
