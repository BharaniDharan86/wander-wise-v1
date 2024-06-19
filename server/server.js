import app from "./app.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;

mongoose
  .connect(DB_CONNECTION_STRING)
  .then(() => {
    console.log("Database connected successfully!!!");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});
