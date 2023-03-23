const express = require('express');
const users = express.Router();
const user = require('../controllers/users')


users.get("/users/:id", user.userget)

users.get("/users", user.usersget)

users.post('/adduser', user.userpost);
users.post('/login', user.userlogin);

users.patch("/ip-users/:id", user.userpatch)

users.delete("/del-users/:id", user.userdelete)

module.exports = users;