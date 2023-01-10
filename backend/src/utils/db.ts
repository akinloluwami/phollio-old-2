import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(`${process.env.DB_CONNECTION_STRING}`)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log(err);
    });
};

export { connectDB };
