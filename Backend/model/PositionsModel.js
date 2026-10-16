const mongoose = require("mongoose");
const { PositionsSchema } = require("../schemas/PositionsSchema");
const PositionsModel = new mongoose.model("positions", PositionsSchema);
module.exports = { PositionsModel };
