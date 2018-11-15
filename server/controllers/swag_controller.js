const swag = require("../models/swag");

module.exports = {
  read(req, res, next) {
    res.status(200).json(swag);
  }
};

//Let's begin by creating a controllers folder in server/. This is where we'll store all our controller files. Let's create a file called swag_controller.js in this folder. This controller will be responsible for sending the complete array of swag. Let's require the swag model from server/models/swag.js. swag.js is just a javascript file that exports an array of swag objects.

//Now that we have access to the swag array, let's use module.exports to export an object with a read method. This method should capture req, res, and next as parameters. We'll then use res to send a status of 200 and the entire swag array.
