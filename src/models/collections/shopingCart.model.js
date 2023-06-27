
const { model, Schema } = require("mongoose"); // Erase if already required
const COLLECTION_NAME = "ShopingCart";
// Declare the Schema of the Mongo model
const ShopingCartSchema = new Schema(
  {
    shopingCart_customerId: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: [true, "Please provide customer id"],
    },
    shopingCart_foods: {
      type: [
        {
          cart_foodId: {
            type: Schema.Types.ObjectId,
            ref: "food",
          },
          quantity:{
            type: Number}
        },
      ],
      default: []
    },
    shopingCart_number: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = model(COLLECTION_NAME, ShopingCartSchema);
