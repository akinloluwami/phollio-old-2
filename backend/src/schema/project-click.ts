import mongoose from "mongoose";
const { Schema } = mongoose;

const clickSchema = new Schema({
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
  linkId: {
    type: String,
  },
});

const Click = mongoose.model("Click", clickSchema);

export default Click;
