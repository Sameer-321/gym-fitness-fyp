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
      Authorization: "Key test_secret_key_82b5a273ca6a4171a2f5c8be82085a61",
    },
  };

  await axios
    .post("https://khalti.com/api/v2/payment/verify/", dataSend, config)
    .then((response) => {
      console.log(response.data, response.status, "succeess");
      res.status(200).json({ success: true, data: response });
    })
    .catch((error) => {
      console.log(error);
    });
};

// //
// const options = {
//   url: 'https://khalti.com/api/v2/payment/verify/',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer <your-auth-token>'
//   },
//   body: JSON.stringify(dataSend)
// };

// request.post(options, function(err, res, body) {
//   if (err) {
//     console.log('Error:', err);
//   } else {
//     console.log('Response:', body);
//   }
// });
