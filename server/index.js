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


const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})