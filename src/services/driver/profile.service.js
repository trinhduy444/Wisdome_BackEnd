const { BadRequestError, NotFoundError } = require("../../core/error.response");
const { ShipperModel,ShopModel } = require("../../models");
const { authentication } = require("../../auth/authUntil"); // Import logic xác thực JWT

class shipperProfileService{
    static async getShipperProfile(req, res) {
      const customerId = req.user.userId;
      const shopAccount = await ShopModel.findOne({
        _id: customerId,
      });
      if (!shopAccount) throw new NotFoundError("Shipper not found");

      const shipper_accountId = shopAccount._id;
      const shipperInfo = await ShipperModel.findOne({
        shipper_accountId: shipper_accountId,
      });

      if(!shipperInfo) throw new NotFoundError("Shipper not found");

      return shipperInfo;
    }

    static async updateShipperProfile(req, res) {
      const customerId = req.user.userId;
      const shopAccount = await ShopModel.findOne({
        _id: customerId,
      });
      if (!shopAccount) throw new NotFoundError("Shipper not found");

      const shipper_accountId = shopAccount._id;
      const shipperInfo = await ShipperModel.findOne({
        shipper_accountId: shipper_accountId,
      });

      if(!shipperInfo) throw new NotFoundError("Shipper not found");
      const { name, phone, licensePlates } = req.body;

      if (!name || !phone) {
        throw new BadRequestError("Missing required fields");
      }
    
      shipperInfo.shipper_name = name;
      shipperInfo.shipper_phoneNumber = phone;
      shipperInfo.shipper_license_plates = licensePlates;
    
      if (licensePlates) {
        shipperInfo.shipper_status = "VERIFIED";
      }
    

      await shipperInfo.save();

      return shipperInfo;
    }
}

module.exports = shipperProfileService;