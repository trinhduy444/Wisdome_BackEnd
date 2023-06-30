const { BadRequestError, NotFoundError } = require("../../core/error.response");
const { ShopModel } = require("../../models");
const { deleteAllFoodByShopId } = require("../../models/Repositories/food.repo");
const { getInfoData } = require("../../utils");
const {ShopingCart } = require("../../models");



class ShopingCartService {

    static async addFood(req, res) {

        const customerId = req.user.userId;
        let cart = await ShopingCart.findOne({
            shopingCart_customerId: customerId
        })

        // Check Cart Exist
        if(!cart){
            const {food} = req.body;
            const newCart = await ShopingCart.create({
                shopingCart_customerId: customerId,
                shopingCart_foods: food,
            })
            if (!newCart) throw new BadRequestError("Add Food to Cart Error");
            return newCart;
        }

        const foodId = req.body.food.cart_foodId;

        const foodItem = cart.shopingCart_foods.find(
            (food) => food.cart_foodId.toString() === foodId
        );

        // Food item not found
        if (!foodItem) {
            const newFood = {
                cart_foodId: req.body.food.cart_foodId,
                quantity: req.body.food.quantity
            }
            cart.shopingCart_foods.push(newFood);
            cart = await cart.save();
            return cart;
        }
        this.updateFood(req,res);
        
    }


    static async updateFood(req, res) {

        const customerId = req.user.userId;
        const foodUpdateId = req.body.food.cart_foodId;
        const foodUpdateQuantity = req.body.food.quantity;

        let cart = await ShopingCart.findOne({
            shopingCart_customerId: customerId
        })

        // Cart doesn't exist
        if(!cart) return "Cart doesn't exist"

        // Find the food item with the matching cart_foodId
        const foodItem = cart.shopingCart_foods.find(
            (food) => food.cart_foodId.toString() === foodUpdateId
        );

        // Food item not found
        if (!foodItem) {
            return { metadata: "Food item not found in the cart" };
        }

        // Update the quantity of the found food item
        foodItem.quantity = foodUpdateQuantity;

        // Save the updated cart
        cart = await cart.save();

        return cart;
    } 

    // Second Question
    static async deleteFood(req, res) {
        const customerId = req.user.userId;
        const foodIdToDelete = req.body.food.cart_foodId;
      
        try {
          const cart = await ShopingCart.findOneAndUpdate(
            {
              shopingCart_customerId: customerId,
            },
            {
              $pull: {
                shopingCart_foods: { cart_foodId: foodIdToDelete },
              },
            },
            { new: true }
          );
      
          if (!cart) {
            return "Cart not found";
          }
      
          return cart;
        } catch (error) {
          return error;
        }
      }
    static async deleteAllFood(req, res) {
        const customerId = req.user.userId;
        const cart = await ShopingCart.findOne({
            shopingCart_customerId: customerId
        })
        if(!cart){
            return "Cart doesn't exist so don't need to Delete !!! ";
        }
        return await ShopingCart.findOneAndDelete({
            shopingCart_customerId: customerId
        })
    } 
    static async getAllFood(req, res) {
        const customerId = req.user.userId; 
        const cart = await ShopingCart.findOne({
            shopingCart_customerId: customerId
        })
        if(!cart){
            return "Cart dosen't exist";
        }
        return cart;
    } 
}
module.exports = ShopingCartService;
