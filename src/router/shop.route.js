const express = require("express");
const router = express.Router();

const {
  createFoodType,
  getAllFoodType,
  createFood,
  getFoodById,
  getFoodByShopId,
  getFoodBySearchField,
  getAllFoods,
} = require("../controllers/food.controller");
const { authentication } = require("../auth/authUntil");

const multer = require("multer");
const path = require("path");
const parentDir = path.basename(path.dirname(__dirname));

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, parentDir + "/images");
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

//----------------------------------------------------------//

router.route("/food/search").get(getFoodBySearchField);
router.route("/food").get(getAllFoods);
//////////////////////////
router.use(authentication);
//////////////////////////
// ---------------- Food ----------------
router.use(upload.single("file"));
router.route("/createFood").post(createFood);
router.route("/food/getByShop").get(getFoodByShopId);
router.route("/food/getById/:foodId").get(getFoodById);

// ---------------- Type Food ----------------
router.route("/typeFood").post(createFoodType);
router.route("/typeFood").get(getAllFoodType);

module.exports = router;
