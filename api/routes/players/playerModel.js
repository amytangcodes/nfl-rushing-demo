"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const playerSchema = new Schema({
  rank: Number,
  player: String,
  team: String,
  pos: String,
  att: Number,
  attG: Number,
  yds: Number,
  avg: Number,
  ydsG: Number,
  td: Number,
  lng: Number,
  first: String,
  firstPer: Number,
  twentyPlus: Number,
  fortyPlus: Number,
  fum: Number
});

module.exports = mongoose.model("Player", playerSchema);
