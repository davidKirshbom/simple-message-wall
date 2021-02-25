const express = require("express");
const cors = require("cors");

require("./db/mongoDb");
const MessagesRouter = require("./routers/messageRouter");
const app = express();
app.use(cors());
app.use(express.json());
app.use(MessagesRouter);

const port = process.env.PORT;

app.listen(port, () => {
  console.log("listening on port", port);
});
