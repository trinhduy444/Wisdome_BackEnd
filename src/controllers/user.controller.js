const profileService = require("../services/user/profile.service");
const { OK } = require("../core/success.response");


  const updateInformaiton = async (req, res) =>{
    new OK({
      message: "Update Information Successfully",
      metadata: await profileService.updateInformaiton(req, res),
    }).send(res);
  }
  module.exports = {
    updateInformaiton
  };





