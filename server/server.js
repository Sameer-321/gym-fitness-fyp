const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const colors = require("colors");
const errorHandler = require("./middleware/error");
const cors = require("cors");
const bodyParser = require("body-parser");

//Load env vars
dotenv.config({ path: "./config/config.env" });

const stripe = require("stripe")(
  "sk_test_51MmvcYIJni8Lp9hbz0X8qOpXrqRKNQUF9lGjLDCieZNcu6s0lhsk36Hv5DoYpeYr6nZR27Fur2qTGQmRERykbMLa00Gl15NEq3"
);

const uuid = require("uuid").v4;

//connect to DB
connectDB();

//Routes files
const bootcamps = require("./routes/bootcamps");
const auth = require("./routes/auth");

const app = express();

// parse application/json body parser
app.use(bodyParser.json());

// Enable cors
app.use(cors());

//Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Mount routers
app.use("/api/v1/bootcamps", bootcamps);
app.use("/api/v1/auth", auth);

app.use(errorHandler);

app.post("/api/v1/checkout", async (req, res) => {
  console.log(req.body);

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
        amount: (product.totalPrice) * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purcased the pant`,
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
});

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

//Handle unhandled rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`error: ${err.message}`.red);
  //close server & exit process
  server.close(() => process.exit(1));
});
