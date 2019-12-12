"use strict";

const Player = require("./playerModel");

// Helper function to list each of the players in the database
exports.listPlayers = async () => {
  try {
    const players = await Player.find();
    return players;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Create a new player that will be added to the database
exports.createPlayer = async playerData => {
  try {
    const player = await new Player(playerData);
    const newPlayer = await player.save();
    return newPlayer;
  } catch (err) {
    throw new Error(err.message);
  }
};
