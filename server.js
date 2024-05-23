const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();

// Middleware to process all the data format to JSON
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

// Import the Router files
const userRoutes = require("./routes/userRoutes");
const candidateRoutes = require("./routes/candidateRoutes");

// Use the Routers
app.use("/user", userRoutes);
app.use("/candidate", candidateRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
