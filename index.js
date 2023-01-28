const express = require("express");
require("dotenv").config();
const cors = require("cors");

const connection = require("./Config/db");
const userRouter = require("./Routes/user.router");
const app = express();

app.use(cors({ origin: "*" }));

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ msg: "Welcome " });
});

app.use("/user", userRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("db is connected successfully");
  } catch (err) {
    console.log("db is connected successsfully");
    console.log(err);
  }

  console.log(`Server listning on http://localhost:${process.env.PORT}`);
});
