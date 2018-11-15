const users = require("../models/users");

let id = 1;

module.exports = {
  login(req, res, next) {
    const { session } = req;
    const { username, password } = req.body;
    const user = user.find(
      user => user.username === username && user.password === password
    );
    if (user) {
      session.user.username = user.username;
      res.status(200).json(session.user);
    } else {
      res.status(200).json("Unauthorized");
    }
  },
  register(req, res, next) {
    const { session } = req;
    const { username, password } = req.body;

    users.push({ id, username, password });
    id++;

    session.user.username = username;
    res.status(200).json(session.user);
  },
  signout(req, res, next) {
    const { session } = req;
    session.destroy();
    res.status(200).json(session);
  },
  getUser(req, res, next) {
    const { session } = req;
    res.status(200).json(session.user);
  }
};

//Let's begin by creating an auth_controller.js file in server/controllers/. This controller will be responsible for logging in users, registering users, signing out users, and also retrieving user information. Since we'll be working with users, we'll need to require the user.js file from server/models/users.js. This javascript file exports an array of all the users.

//We'll also need to create a global id variable. We'll use this variable to assign ids to newly registered users and then increment it by one so no users have the same id.

//Now let's focus on signout. This method is responsible for destroying the session and returning the session ( which should be undefined at that point ).

//Next up is register. We'll keep this method simple and won't check for any previous users with the same login information. This method should look for a username and password on the request body and then create a user object. It should use the global id variable for the id. After pushing the new user object to the users array it should increment the value of id by one so we can keep the value of id unique. It should then set the value of username on the request session's user object to the value of username from the request body. Finally the method should return the updated user object with a status of 200.

//Finally, let's focus on the login method. This method should use username and password from the request body to find a user object in the users array with the same user/pass combination. If it finds a user with that combination, it should update the value of username on the request session's user object to value of username from the request body. It should then send a status of 200 with the updated user object. If it doesn't find a user it should send a status of 500.