// Dependencies
require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const path = require("path");
const hbs = exphbs.create({});
const sequelize = require("./config/connection");


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;


// Set Handlebars as the default template engine.
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Server listening on: http://localhost:" + PORT));
});
