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
      console.log(response.data, "succeess");
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.stripe = async (req, res, next) => {
  // console.log(req.body);

  let status;

  try {
    const { product, token } = req.body;

    console.log(product, "productsproductsproducts");

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const key = uuid();

    const charge = await stripe.charges.create(
      {
        amount: product.totalPrice * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Subscription of GYM`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip,
          },
        },
      },
      {
        idempotencyKey: key,
      }
    );

    console.log("Success", { charge });
    status = "success";
  } catch (error) {
    console.log("Error", error);
    status = "failure";
  }
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
