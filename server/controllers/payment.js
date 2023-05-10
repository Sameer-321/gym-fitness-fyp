const ErrorResponse = require("../utils/errorResponse");
//const User = require("../models/User");
const axios = require("axios");
//@desc     Register Users
//@route    POST /api/v1/auth/register
//@acess    Public

exports.khalti = async (req, res, next) => {
  const data = req.body;
  // const {data} = req.body;
  console.log("check", data);
  let dataSend = {
    token: data.token,
    amount: data.amount,
  };

  let config = {
    headers: {
      Authorization: "Key test_secret_key_5060955037eb4201aef28c7d8745420a",
    },
  };

  await axios
    .post("https://khalti.com/api/v2/payment/verify/", dataSend, config)
    .then((response) => {
      // console.log(response.data, response.status, "succeess");
      res.status(200).json({ success: true, data: response.data });
    })
    .catch((error) => {
      console.log(error);
    });
};
