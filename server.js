const express = require("express");
const path = require("path");

app = express();

app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname + "/./src/index.html"));
});

app.listen(3000);
