const express = require("express");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const authUserRoutes = require("./routes/user");

const authAdminRoutes = require("./routes/admin");



const app = express();


app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");

    next();
});

app.use("/auth/user", authUserRoutes);

app.use("/auth/admin", authAdminRoutes);


app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;

  res.status(status).json({ message: message });
});

const port = process.env.PORT || 8000;

mongoose.connect('mongodb+srv://Shenal:SmartPetFeeder2021@cluster0.y3bkj.mongodb.net/Smart-Pet-Feeder?retryWrites=true&w=majority')
    .then(result=>{
        console.log("Connected Successfully!");
        app.listen(port);
    })
    .catch(err=>{
        console.log("Database Connections Failed");
    })

