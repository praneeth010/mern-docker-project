require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch(err => console.log(err));

app.get("/api", (req, res) => {
  res.send("Hello from backend!");
});

app.listen(process.env.PORT || 5000, () =>
  console.log("Server running on port 5000")
);
