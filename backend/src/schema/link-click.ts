import mongoose from "mongoose";
const { Schema } = mongoose;

const linkClickSchema = new Schema({
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
  visitedAccountId: {
    type: String,
  },
});

const LinkClick = mongoose.model("LinkClick", linkClickSchema);

export default LinkClick;
