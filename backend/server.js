require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

// express app
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the homepage!")
});

app.get("/admin", (req, res) => {
    res.send("This is the admin page.")
});

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connected to the db & listening on port", process.env.PORT,"- Outta site!!")
        });
    })
    .catch((error) => {
        console.log(error)
    });
