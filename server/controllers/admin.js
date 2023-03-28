const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");

exports.login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
  
      // Validate email and password
      if (!email || !password) {
        return next(
          new ErrorResponse(`Please provide an email and password`, 400)
        );
      }
  
      // Check for the user
      const user = await User.findOne({ email: email }).select("+password");
  
      if (!user) {
        return next(new ErrorResponse(`Invalid Credentials`, 401));
      }
  
      // Check if password matches
      const isMatch = await user.matchPassword(password);
  
      if (!isMatch) {
        return next(new ErrorResponse(`Invalid Credentials`, 401));
      }
  
      sendTokenRespons(user, 200, res);
    } catch (error) {
      next(error);
    }
  };