const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb://node-api:123abc123@ds135207.mlab.com:35207/node-api",
  {
    useNewUrlParser: true
  }
);

app.use("/api", routes);
app.listen(9999);
