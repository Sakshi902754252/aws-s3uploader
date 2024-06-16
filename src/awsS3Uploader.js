// src/awsS3Uploader.js

const AWS = require('aws-sdk');

class AWSS3Uploader {
  constructor(config) {
    this.s3 = new AWS.S3(config);
    this.bucketName = config.bucketName;
  }
}

module.exports = AWSS3Uploader;
