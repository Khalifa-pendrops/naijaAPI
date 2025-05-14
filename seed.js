require("dotenv").config();
const mongoose = require("mongoose");
const State = require("./models/States");
const statesData = require("./nigerianStates.json");

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await State.deleteMany({});
    await State.insertMany(statesData);
    console.log("Data seeded successfully 🚀");
    process.exit();
  })
  .catch((err) => console.error(err));
