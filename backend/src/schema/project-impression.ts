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
  projectId: {
    type: String,
  },
});

const Impression = mongoose.model("Impression", impressionSchema);

export default Impression;
