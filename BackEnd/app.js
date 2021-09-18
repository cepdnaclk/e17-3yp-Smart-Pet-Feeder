const express = require("express");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const authRoutes = require("./routes/auth");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");

  next();
});

app.use("/auth", authRoutes);

app.use("/auth", authRoutes);

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;

  res.status(status).json({ message: message });
});


mongoose.connect('mongodb+srv://Shenal:SmartPetFeeder2021@cluster0.y3bkj.mongodb.net/Smart-Pet-Feeder?retryWrites=true&w=majority')
    .then(result=>{
        console.log("Connected Successfully!");
        app.listen(8000);
    })
    .catch(err=>{
        console.log("Database Connections Failed");
    })

