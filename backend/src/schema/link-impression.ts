import mongoose from "mongoose";
const { Schema } = mongoose;

const linkImpressionSchema = new Schema({
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

const linkImpression = mongoose.model("linkImpression", linkImpressionSchema);

export default linkImpression;
