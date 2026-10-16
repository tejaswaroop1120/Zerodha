require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const uri = process.env.MONGO_URL;

// Connect to MongoDB
mongoose
  .connect(uri)
  .then(() => {
    console.log("Successfully connected to MongoDB!");

    app.listen(8080, () => {
      console.log("App is listening on port 8080");
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });



// Home route
app.get("/", async (req, res) => {
  await newDetail.save();
  res.send("Welcome to the backend");
});
