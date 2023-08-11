
const { model, Schema } = require("mongoose"); // Erase if already required
const COLLECTION_NAME = "OrderDetail";
// Declare the Schema of the Mongo model
const orderDetailSchema = new Schema(
  {
    order_id: {
      type: Schema.Types.ObjectId,
      ref: "Order",
      required: [true, "Please provide order id"],
    },
    shipper_id: {
      type: Schema.Types.ObjectId,
      default: "64c3f5b612f6a57bcf01c0e4",
      required: [true, "Please provide shipper id"],
    },
    note: {
      type: String,
    },
    address_restaurant: {
      type: String,
      required: [true, "Please provide restaurant address"],
    },
    address_customer: {
      type: String,
      required: [true, "Please provide customer address"],
    },
    payment_name: {
      type: String,
      enum: ["Cash", "Momo", "E-Banking", "Credit Card"],
      default: "Cash",
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = model(COLLECTION_NAME, orderDetailSchema);
