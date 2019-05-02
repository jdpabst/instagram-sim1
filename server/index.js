const express = require('express');
const massive = require('massive');
const config = require('./config');

const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public'));

console.log(config.massiveConnection);
massive(config.massiveConnection)
  .then(db => {
    app.set('db', db);
  }).catch(err => {
    console.log(err);
  })

// taking the function I create in the user contoller and hooking it to an api end point
const userController = require("./controllers/user")
app.post('/api/user/create', userController.addUser);
app.get('/api/user/login', userController.fetchUser);


const port = 8000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})