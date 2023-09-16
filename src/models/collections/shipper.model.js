
const { model, Schema } = require("mongoose"); // Erase if already required
const COLLECTION_NAME = "Shipper";
// Declare the Schema of the Mongo model
const shipperSchema = new Schema(
  {
    shipper_accountId: {
      type: Schema.Types.ObjectId,
      required: [true, "Please provide shipper id"],
      ref: "shop",
    },
    shipper_name: {
      type: String,
      required: [true, "Please provide shipper name"],
      maxlength: 30,
    },
    shipper_info: {
      type: String,
      maxlength: 100,
    },
    shipper_email: {
      type: String,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        ,
        "Please provide valid email",
      ],
      unique: true,
      required: [true, "Please provide shipper email"],
      maxlength: 50,
      ref: "shop",
    },
    shipper_phoneNumber: {
      type: String,
      required: [true, "Please provide shipper phoneNumber"],
      maxlength: 20,
    },
    shipper_image_face: {
      type: String,
      required: [false, "Please provide shipper face image"],
      maxlength: 20,
    },
    shipper_image_card: {
      type: String,
      required: [false, "Please provide shipper Citizen ID image"],
      maxlength: 20,
    },
    shipper_license_plates:{
      type: String,
      required: [false, "Please provide shipper license plates"],
      maxlength: 20,
    },
    shipper_status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE", "BLOCKED","UNVERIFIED","VERIFIED"],
      default: "UNVERIFIED",
    },
    shipper_rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    shipper_total_order: {
      type: Number,
      default: 0,
    },
    shipper_total_money: {
      type: Number,
      default: 0,
    },
    shipper_total_cancel: {
      type: Number,
      default: 0,
    },
    shipper_total_time: {
      type: Number,
      default: 0,
    },
    shipper_total_distance: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = model(COLLECTION_NAME, shipperSchema);
