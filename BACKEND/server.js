const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL)
  .then(() => console.log("MongoDB connection successful!"))
  .catch(err => console.error("MongoDB connection error:", err));


const studentRouter = require("./routes/Students.js");
app.use("/student", studentRouter);



app.listen(PORT, () => {
  console.log(`Server is up and running on port number ${PORT}`);
});

