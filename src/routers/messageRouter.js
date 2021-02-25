const Message = require("../models/Message");
const express = require("express");

const router = express.Router();

router.get("/message", async (req, res) => {
  const messagesList = await Message.find({});
  res.send(messagesList);
});

router.post("/message", async (req, res) => {
  const validAttributes = ["title", "body"];
  const message = req.body.message;

  for (let attribute in message)
    if (!validAttributes.includes(attribute))
      return res.status(400).send({
        status: 400,
        message: "message can have only title or/and body",
      });

  try {
    new Message({ ...message }).save();
  } catch (err) {
    return res
      .status(500)
      .send({ code: 500, message: "problem occurred please try again later!" });
  }
  return res.send();
});
module.exports = router;
