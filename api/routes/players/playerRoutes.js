"use strict";

const express = require("express");
const router = express.Router();

const playerService = require("./playerService");

// GET /players/
router.get("/", async (req, res, next) => {
  try {
    const players = await playerService.listPlayers();
    res.status(200).json({ data: players });
  } catch (err) {
    console.log({ err });
    res.status(500).json({ error: "internal server error" });
  }
});

// CREATE player
router.post("/", async (req, res) => {
  const body = req.body;

  if (!player || player === "") {
    res.status(400).json({ error: "player must be provided" });
  }

  try {
    const player = await playerService.createPlayer({
      body
    });
  } catch (err) {
    console.log({ err });
    res.status(500).json({ error: "internal server error" });
  }
});
exports.router = router;
