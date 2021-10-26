const express = require("express");
const app = express();
const port = 5000;

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send({ Hello: "World" });
});