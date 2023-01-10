import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  displayName: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  profilePicture: {
    type: String,
  },
  github: {
    type: String,
  },
  twitter: {
    type: String,
  },
  dribbble: {
    type: String,
  },
  otp: {
    type: String,
  },
  otpExpiry: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  emailVerifiedTime: {
    type: Date,
  },
  resetPasswordToken: {
    type: String,
  },
  resetPasswordExpiry: {
    type: Date,
  },
});

const User = mongoose.model("User", userSchema);

export default { User };
