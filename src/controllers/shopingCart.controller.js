const {ShopingCart } = require("../models");
const ShopingCartService = require("../services/user/shopingCart.service");
const { OK, CREATED } = require("../core/success.response");



  const addFood = async (req, res) =>{
    new CREATED({
      message: "Add Food Successfully",
      metadata: await ShopingCartService.addFood(req, res),
    }).send(res);
  }
  const updateFood = async (req, res) =>{
    new OK({
      message: "Update Food Successfully",
      metadata: await ShopingCartService.updateFood(req, res),
    }).send(res);
  }
  const deleteFood = async (req, res) =>{
    new OK({
      message: "Delete Food Successfully",
      metadata: await ShopingCartService.deleteFood(req, res),
    }).send(res);
  }
  const deleteAllFood = async (req, res) =>{
    new OK({
      message: "Delete All Food Successfully",
      metadata: await ShopingCartService.deleteAllFood(req, res),
    }).send(res);
  }
  const getAllFood = async (req, res) =>{
    new OK({
      message: "Get All Food Successfully",
      metadata: await ShopingCartService.getAllFood(req, res),
    }).send(res);
  }
  
  module.exports = {
    addFood,
    updateFood,
    deleteFood,
    deleteAllFood,
    getAllFood
  };





