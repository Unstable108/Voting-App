const express = require("express");
const app = express();
// const db = require("./db");
// require("dotenv").config();

// Middleware to process all the data format to JSON
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
