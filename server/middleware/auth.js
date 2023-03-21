const jwt = require("jsonwebtoken");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
// const cookieParser = require('cookie-parser');

// Protect Routes from UnAuthenticated Users

exports.protect = async (req, res, next) => {
  console.log("asd:", req.headers)
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    else if (req.cookies.token) {
      token = req.cookies.token;
    }

    // Make sure token exists
    if (!token) {
      return next(
        new ErrorResponse(`Not authorized to access this route `, 401)
      );
    }
    console.log("Btoken",token)

    try {
      // Verify Token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      console.log(decoded);
      req.user = await User.findById(decoded.id);
      console.log(req.user)
      // setTimeout(myGreeting, 500000);
      next();
    } catch (error) {
      return next(
        new ErrorResponse(`Not authorized to access this route `, 401)
      );
    }
  } catch (error) {
    next(error);
  }
};


// // Check authentication middleware
// exports.authorize= (req, res, next) => {
//   const token = req.cookies.jwt;

//   // Check if JWT cookie exists
//   if (token) {
//     // Verify JWT
//     jwt.verify(token, 'secret', (err, decodedToken) => {
//       if (err) {
//         // JWT is not valid, clear cookie and redirect to login
//         res.clearCookie('jwt');
//         res.redirect('/login');
//       } else {
//         // JWT is valid, set user object in request and continue
//         req.user = { id: decodedToken.userId, email: decodedToken.email };
//         next();
//       }
//     });
//   } else {
//     // JWT cookie does not exist, redirect to login
//     res.redirect('/login');
//   }
// };

//Role based access system

exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorResponse(
          `User role ${req.user.role} is unauthorized to access this route`,
          403
        )
      );
    }
    next();
  };
};