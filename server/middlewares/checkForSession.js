module.exports = function(req, res, next) {
  const { session } = req;

  if (!session.user) {
    session.user = { username: "", cart: [], total: 0.0 };
  }
  next();
};

//Let's begin by creating a folder called middlewares in server/. We'll keep all our middleware in this folder. Let's create a file called checkForSession.js inside this folder. Export a function that captures req, res, and next as parameters.

//In this middleware, we'll want to check to see if the sesssion has a user object or not. The user object will keep track of users on our website. We'll store what items are in their cart, the total cost of their cart, and their username. We'll only want to add the default user object once. So let's add an if statement to check to see if the user object doesn't exists.

//If it doesn't exist, we'll want to add a user object to the session. A user object should default to: { username: '', cart: [], total: 0 }. We'll also want to call next after the if statement so the request can reach the endpoint.
