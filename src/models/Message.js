const mongoose = require("mongoose");
const messageSchema = require("../schemas/message");
const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
