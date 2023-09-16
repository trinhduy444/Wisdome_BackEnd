const ShipperProfileService = require("../services/driver/profile.service");
const DeliveryService = require("../services/driver/delivery.service");

const { OK } = require("../core/success.response");


const getShipperProfile = async (req, res) => {
  new OK({
    message: "Get Shipper Information Successfully",
    metadata: await ShipperProfileService.getShipperProfile(req, res),
  }).send(res);
};
const updateShipperProfile = async (req, res) => {
  new OK({
    message: "Update Shipper Information Successfully",
    metadata: await ShipperProfileService.updateShipperProfile(req, res),
  }).send(res);
};

const getAllOrder = async (req, res) => {
  new OK({
    message: "Get All Order Successfully",
    metadata: await DeliveryService.getAllOrder(req, res),
  }).send(res);
};
module.exports = {
    getShipperProfile,
    updateShipperProfile,
    getAllOrder
}