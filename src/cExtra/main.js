const express = require('express')
const app = express();
const vision =require('@google-cloud/vision');
'use strict';

// sample-metadata:
//   title: Cloud Vision Quickstart
//   description: Performs label detection of an image with a cat.
//   usage: node quickstart.js

function main() {
  // [START vision_quickstart]
  async function quickstart() {
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');

    // Creates a client
    const client = new vision.ImageAnnotatorClient();

    // Performs label detection on the image file
    const [result] = await client.labelDetection('./Cars/2004-nissan-fairlady-22723611_15437935.jpg');
    const labels = result.labelAnnotations;
    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
  }
  quickstart();
  // [END vision_quickstart]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

main(...process.argv.slice(2));

app.listen(5000, ()=> console.log("it is running"));