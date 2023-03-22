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
const payment = require("./routes/payment")
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
app.use("/api/v1/payment",payment );

app.use(errorHandler);


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
