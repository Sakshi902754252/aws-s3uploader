// src/uploader.js

const fs = require('fs');
const axios = require('axios');

class Uploader {
  constructor(cloudProvider) {
    this.cloudProvider = cloudProvider;
  }

  async upload(filePath) {
    if (!fs.existsSync(filePath)) {
      throw new Error('File does not exist');
    }

    const fileStats = fs.statSync(filePath);
    const fileStream = fs.createReadStream(filePath);

    const uploadParams = {
      Bucket: this.cloudProvider.bucketName,
      Key: this.generateFileName(filePath),
      Body: fileStream,
      ContentLength: fileStats.size,
    };

    return new Promise((resolve, reject) => {
      const upload = this.cloudProvider.s3.upload(uploadParams);

      upload.on('httpUploadProgress', (progress) => {
        console.log(`Progress: ${Math.round((progress.loaded / progress.total) * 100)}%`);
      });

      upload.send((err, data) => {
        if (err) return reject(err);
        resolve(data);
      });
    });
  }

  generateFileName(filePath) {
    return `${Date.now()}-${filePath.split('/').pop()}`;
  }
}

module.exports = Uploader;
