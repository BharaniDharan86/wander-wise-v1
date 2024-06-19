import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Username should not be empty"],
    },
    email: {
      type: String,
      required: [true, "Email Id should not be empty"],
      unique: true,
      lowercase: true,
      validate: {
        validator: function (value) {
          return validator.isEmail(value);
        },
        message: "Please provide a valid Email Id",
      },
    },
    isVerified:{
      type:Boolean,
      default:false
    },
    otp:{
      type:Number
    },
    password: {
      type: String,
      min: [8, "Password should be atleast 8 character"],
    },
    passwordChangedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
    toJSON: true,
    toObject: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
