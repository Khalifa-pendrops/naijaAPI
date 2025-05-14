const express = require("express");
const router = express.Router();
const State = require("../models/States");

router.get("/", async (req, res) => {
  const states = await State.find();
  res.json(states);
});

router.get("/:stateName", async (req, res) => {
  const state = await State.findOne({
    state: new RegExp(req.params.stateName, "i"),
  });

  if (!state)
    return res.status(404).json({
      message: "State not in Nigeria or not found 😞",
    });

  res.json(state);
});

module.exports = router;
