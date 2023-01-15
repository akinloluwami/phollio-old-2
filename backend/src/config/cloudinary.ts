import dotenv from "dotenv";
dotenv.config();
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CD_NAME,
  api_key: process.env.CD_API_KEY,
  api_secret: process.env.CD_API_SECRET,
});
