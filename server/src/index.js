import dotenv from "dotenv";

import connectDB from "./db/index.js";
import { app } from "./app.js";
import cors from "cors";
dotenv.config({
  path: "./env",
});
app.use(
  cors({
    origin: "https://lifebahnheaventest-frontend.vercel.app", // Frontend URL
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
connectDB()
  .then(() => {
    app.on("error", (error) => {
      // console.log("ERROR: ", error )
      throw error;
    });
    app.listen(process.env.PORT | 3000, () => {
      console.log(`⚙️  Server is running on port : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Mongo Db conntection failed !!! ", error);
  });
