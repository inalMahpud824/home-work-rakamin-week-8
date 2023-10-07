const express = require("express");
const router = require('./routes/index.js')
const pool = require("./query.js");
const app = express();

app.use(router)
const port = 8000;
app.listen(port, () => {
  console.log("server berjalan di server: " + port);
});