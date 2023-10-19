// Dependencies
require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const path = require("path");
const sequelize = require("./config/connection");

const session = require("express-session");
const helpers = require("./utils/auth");


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({ helpers });

// Set Handlebars as the default template engine.
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));



const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
};

app.use(session(sess));

app.use(routes);

// Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Server listening on: http://localhost:" + PORT));
});










