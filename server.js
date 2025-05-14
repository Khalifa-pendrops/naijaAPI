require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const stateRoutes = require("./routes/states");

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully 💥"))
  .catch((err) => console.errror(err));

app.use("/api/v1/states", stateRoutes);

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => console.log(`Server running on port $(PORT)`));
