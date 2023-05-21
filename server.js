require("./src/config/conn");
const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const userRoute = require("./src/routes/user.routes");

app.use("/user", userRoute);

app.get("/", (req, res) => {
    res.send({status: 'ok'});
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Server is Running on " + port);
});
