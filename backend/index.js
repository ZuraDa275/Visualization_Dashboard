import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import getData from "./routes/getDataRouter.js";

mongoose
  .connect(process.env.MONGO_URI, {
    dbName: process.env.DB_NAME,
  })
  .then(() => console.log("Connected to the DB successfully"))
  .catch((err) =>
    console.log("Error occurred while connecting to the DB", err)
  );

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", getData);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
