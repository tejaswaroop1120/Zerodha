const mongoose = require("mongoose");
const { OrdersSchema } = require("../schemas/OrdersSchema");
const OrdersModel = new mongoose.model("positions", OrdersSchema);
module.exports = { OrdersModel };
