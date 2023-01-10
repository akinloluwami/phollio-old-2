import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import express, { Application, Request, Response } from "express";
import { connectDB } from "./utils/db";
import cors from "cors";
import authRouter from "../src/routes/auth";
import profileRouter from "../src/routes/profile";
import linkRouter from "../src/routes/link";

connectDB();

const app: Application = express();

app.use(bodyParser());
app.use(cors());
// app.use("/images/profiles", express.static("./public/images/profiles"));

app.get("/", (req: Request, res: Response) => {
  const text = process.env.DB_CONNECTION_STRING;
  console.log(text);
  res.send("Hiii");
});

app.use("/auth", authRouter);
app.use("/profile", profileRouter);
app.use("/link", linkRouter);

app.listen(2004, () => console.log(`Server is live on http://localhost:2004`));
