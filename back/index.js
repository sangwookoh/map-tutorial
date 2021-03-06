const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const UserRouter = require("./routes/users");
const PinRouter = require("./routes/pins");

require("dotenv").config();

// db conncect
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGO CONNCTED");
  })
  .catch((err) => console.log(err));

let corsOption = {
  origin: "http://localhost:3000/",
  Credential: true,
};

//middleware
app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", UserRouter);
app.use("/api/pins", PinRouter);

// server
app.listen(process.env.LOCALHOST, () => {
  console.log("BACK SERVER IS RUNNING");
});
