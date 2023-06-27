const express = require("express");
const router = express.Router();
const { addFood,
        updateFood,
        deleteFood,
        deleteAllFood,
        getFood,
        getAllFood 
    } = require("../controllers/shopingCart.controller");
const { authentication } = require("../auth/authUntil");


router.use(authentication);
router.route('/addFood').post(addFood);
router.route('/updateFood').post(updateFood);
router.route('/deleteFood').post(deleteFood);
router.route('/deleteAllFood').post(deleteAllFood);
router.route('/getFood').get(getFood);
router.route('/getAllFood').get(getAllFood);






module.exports = router;
