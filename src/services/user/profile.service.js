const { BadRequestError, NotFoundError } = require("../../core/error.response");
const { ShopModel } = require("../../models");

class profileService {
  static async updateInformaiton(req, res) {
    const body = req.body;
    const update = {
      shop_userName: body.shop_userName,
      shop_gerder: body.shop_gerder,
      shop_birtday: body.shop_birtday,
      shop_phoneNumber: body.shop_phoneNumber,
      shop_address: body.shop_address,
    };
    console.log(update);
    let user = await ShopModel.findOneAndUpdate(
      {
        shop_email: body.shop_email,
      },
      update
    );

    // user doesn't exist
    if (!user) return "User doesn't exist";
    return user;
  }

  static async getInformaiton(req, res) {
    const body = req.body;
    let user = await ShopModel.findOne(
      {
        shop_email: body.shop_email,
      }
    );
    // user doesn't exist
    if (!user) return "User doesn't exist";
    return user;
  }
}
module.exports = profileService;
