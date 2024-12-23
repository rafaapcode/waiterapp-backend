import express from "express";
import helmet from "helmet";
import mongoose from "mongoose";
import { router } from "./router";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(helmet());
app.use(router);

mongoose.connect("mongodb://localhost:27017")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => console.log(err.message));

