import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 3001;

mongoose.connect("mongodb://localhost:27017")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => console.log(err.message));

