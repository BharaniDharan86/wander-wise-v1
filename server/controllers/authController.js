import User from "../models/userModel.js";
import { generateOTP } from "../utils/generators.js";

export const signUpUser = async (req, res, next) => {
  const { userName, password, email } = req.body;

  const isUserExists = await User.findOne({ email }).where({
    isVerified: true,
  });

  if (isUserExists) {
    return res.status(400).json({
      status: "failed",
      success: false,
      message: "User with this Email Id already exists",
    });
  }

  const oneTimePassword = generateOTP(8);

  //create user
  const createdUser = await User.create({
    email,
    password,
    userName,
    otp: oneTimePassword,
  });

  await sendEmail({
    to: email,
    userName,
    subject: "User Email verification",
    otp: oneTimePassword,
  });
};
