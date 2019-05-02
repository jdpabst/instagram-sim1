const aws = require('aws-sdk')
const express = require('express')
const multer = require('multer')
const multerS3 = require('multer-s3')
const config = require('../config')

const app = express();

app.use(express.json());
aws.config.update(config.awsConfig)

massive(config.massiveConnection)
  .then(db => {
    app.set('db', db);
  })

// taking the function I create in the user contoller and hooking it to an api end point
const userController = require("./controllers/user")
app.post('/api/createUser', userController.addUser);


const port = 8080;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})