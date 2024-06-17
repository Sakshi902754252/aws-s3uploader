# s3-upload-tool
`s3-upload-tool` is a powerful and easy-to-use Node.js library designed to simplify the process of uploading files to AWS S3. It provides a streamlined API for file validation, progress tracking, and resumable uploads, making it a great addition to any project that needs reliable file storage solutions.

## Features
- **Easy Integration**: Simple API for quick integration into any Node.js project.


- **File Validation**: Built-in support for validating file types and sizes before upload.


- **Progress Tracking**: Real-time tracking of upload progress to give users feedback.


- **Resumable Uploads**: Support for resumable uploads to ensure reliability even with network interruptions.


- **Configurable**: Flexible configuration options for different use cases.

## Installation
```sh 
npm install s3-upload-tool
````

## Usage
Below is an example of how to use the `s3-upload-tool` to upload a file to AWS S3.
```javascript
const { Uploader, AWSS3Uploader } = require('s3-upload-tool');
const awsS3Uploader = new AWSS3Uploader({
region: process.env.AWS_REGION,
bucketName: process.env.S3_BUCKET_NAME
});

const uploader = new Uploader(awsS3Uploader);

(async () => {
try {
const result = await uploader.upload('path/to/your/file.txt');
console.log('Upload successful:', result);
} catch (error) {
console.error('Upload failed:', error);
}
})();
```

## Environment Variables

- `AWS_ACCESS_KEY_ID`: Your AWS Access Key ID.
- `AWS_SECRET_ACCESS_KEY`: Your AWS Secret Access Key.
- `AWS_REGION`: The AWS region where your S3 bucket is located.
- `S3_BUCKET_NAME`: The name of your S3 bucket.

## API

### `Uploader`

The `Uploader` class is the main entry point for file uploads.

#### Methods

- **constructor(storageUploader: StorageUploader)**: Initializes the uploader with a storage uploader instance.
- **upload(filePath: string): Promise\<UploadResult\>**: Uploads a file to the specified storage and returns the result.

### `AWSS3Uploader`

The `AWSS3Uploader` class provides AWS S3 specific implementation for file uploads.

#### Methods

- **constructor(config: S3Config)**: Initializes the S3 uploader with the provided configuration.
- **upload(filePath: string, onProgress: (progress: number) => void): Promise\<UploadResult\>**: Uploads a file to S3 with progress tracking.


