const profileService = require("../services/user/profile.service");
const { OK } = require("../core/success.response");


  const updateInformaiton = async (req, res) =>{
    new OK({
      message: "Update Information Successfully",
      metadata: await profileService.updateInformaiton(req, res),
    }).send(res);
  }

  const getInformation = async (req, res) => {
    new OK({
      message: "Get Information Successfully",
      metadata: await profileService.getInformaiton(req, res),
    }).send(res);
  }
  module.exports = {
    updateInformaiton,
    getInformation
  };





