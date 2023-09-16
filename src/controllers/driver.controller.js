const ShipperProfileService = require("../services/driver/profile.service");
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
module.exports = {
    getShipperProfile,
    updateShipperProfile
}