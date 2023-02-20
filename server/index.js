import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import User from "./models/User.js";
import Recipe from "./models/Recipe.js";
import { recipes } from "./data/index.js";

// CONFIGURATIONS
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

/* MONGOOSE SETUP */
const MONGO_URL =
  "mongodb+srv://jkk998:rlarldjq98@cluster0.b1gkdlt.mongodb.net/DTS?retryWrites=true&w=majority";
const PORT = process.env.PORT || 6001;
mongoose
  .connect(
    MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    mongoose.set("strictQuery", false)
  )
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME */
    Recipe.insertMany(recipes);
  })
  .catch((error) => console.log(`${error} did not connect ${MONGO_URL}`));
