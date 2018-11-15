// ********** ALWAYS KEEP DOTENV @ TOP **********
require("dotenv").config();

// ********* REQUIRE DEPENDENCIES ************
const express = require("express");
const app = express();
const { json } = require("body-parser");
const port = process.env.PORT || 3001;
const session = require("express-session");

// ******** MIDDLEWARE ***********
const checkForSessions = require("./middlewares/checkForSession");

// ******* DESTRUCTURED CONTROLLER  *******
const { search } = require("./controllers/search_controller.js");
const { read } = require("./controllers/swag_controller");
const { added, deleted, checkout } = require("./controllers/cart_controller");
const {
  login,
  register,
  signout,
  getUser
} = require("./controllers/auth_controller");

app.use(json());

// *********** SESSIONS **************
app.use(
  session({
    cookie: {
      maxAge: 10000
    },
    saveUninitialized: true,
    resave: false,
    secret: process.env.SESSION_SECRET
  })
);
app.use(checkForSessions);

// ************* END POINTS ************
// swag_controller
app.get("/api/swag", read);

// auth_controller
app.post("/api/login", login);
app.post("/api/register", register);
app.post("/api/signout", signout);
app.get("/api/user", getUser);

//cart_controller
app.post("/api/cart", added);
app.delete("/api/cart", deleted);
app.post("/api/cart", checkout);

// search_controller
app.get("/api/search", search);

//*********** APP.LISTEN *************
app.listen(port, () => {
  console.log(`BEEP listening on port ${port}`);
});
