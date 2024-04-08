import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";
const app = express();
dotenv.config({
  path: "/.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server listening on port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.warn("Failed while connecting to Db!", error);
  });
