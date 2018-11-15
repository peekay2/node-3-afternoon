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
const { read } = require("./controllers/swag_controller");
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

//*********** APP.LISTEN *************
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
