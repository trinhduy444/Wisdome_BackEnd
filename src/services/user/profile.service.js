const { BadRequestError, NotFoundError } = require("../../core/error.response");
const { ShopModel } = require("../../models");
const { deleteAllFoodByShopId } = require("../../models/Repositories/food.repo");
const { getInfoData } = require("../../utils");
class profileService {

    static async updateInformaiton(req, res) {
        const { email,userName, Gender, Birtdate, Phone, Address} = req.body;

        const emailChange = email;
        const userNameChange = userName;
        const GenderChange = Gender;
        const BirtdateChange = Birtdate;
        const phoneChange = Phone;
        const AddressChange = Address;
        
        let user = await ShopModel.findOne({
            shop_email: emailChange
        })

        // user doesn't exist
        if(!user) return "User doesn't exist"

        // Update user
        user.shop_userName = userNameChange;
        user.shop_gerder = GenderChange;
        user.shop_birtday = Birtdate;
        user.shop_phoneNumber = phoneChange;
        user.shop_address = AddressChange;

        // Save the updated user
        user = await user.save();

        return user;
    } 
}
module.exports = profileService;
