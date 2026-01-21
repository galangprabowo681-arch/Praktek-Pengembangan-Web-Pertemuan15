require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set("view engine", "ejs");

app.use("/", require("./routes/authRoutes"));
app.use("/", require("./routes/itemRoutes"));

app.listen(3000, () => console.log("Server running"));
