import mongoose from "mongoose";
const { Schema } = mongoose;

const impressionSchema = new Schema({
  timestamp: {
    type: Date,
    default: Date.now,
  },
  userAgent: {
    type: String,
  },
  ipAddress: {
    type: String,
  },
  deviceType: {
    type: String,
  },
  browser: {
    type: String,
  },
  userId: {
    type: String,
    required: true,
  },
  os: {
    type: String,
  },
  fullDeviceInfo: {
    type: Object,
  },
});

const impression = mongoose.model("impression", impressionSchema);

export default impression;
