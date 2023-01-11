import mongoose from "mongoose";
const { Schema } = mongoose;

const projectClickSchema = new Schema({
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

const projectClick = mongoose.model("projectClick", projectClickSchema);

export default projectClick;
