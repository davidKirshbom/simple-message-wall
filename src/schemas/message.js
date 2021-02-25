const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
});

module.exports = messageSchema;
