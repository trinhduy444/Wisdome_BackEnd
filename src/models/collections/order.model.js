
const { model, Schema } = require("mongoose"); // Erase if already required
const COLLECTION_NAME = "Order";
// Declare the Schema of the Mongo model
const orderSchema = new Schema(
  {
    customer_id: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: [true, "Please provide customer id"],
    },
    image_shop: {
      type: String,
      required: [false, "Please provide image of the shop"],
    },
    shop_name: {
      type: String,
      default: "Shop Anonymous",
      required: [true, "Please provide shop name"],
    },
    status: {
      type: String,
      enum: ["Pending", "Processing", "Completed"],
      default: "Pending",
    },
    totalPrice: {
      type: Number,
      required: [true, "Please provide total price"],
    },
    date_order: {
      type: Date,
      required: [true, "Please provide order date"],
    },
    time_order: {
      type: String,
      default: "00:00",
      required: [true, "Please provide order time"],
    },
    food_name: [
      {
        type: String,
        required: [true, "Please provide food name"],
      },
    ],
    food_amount: [
      {
        type: Number,
        required: [true, "Please provide food amount"],
      },
    ],
  },
  {
    timestamps: true,
  }
);
//Export the model
module.exports = model(COLLECTION_NAME, orderSchema);
