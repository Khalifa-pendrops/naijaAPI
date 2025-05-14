const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
  state: String,
  capital: String,
  zone: String,
  nysc_orientation_camp: {
    location: String,
    address: String,
  },
});

module.exports = mongoose.model("State", stateSchema);
