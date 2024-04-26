
let args = process.argv.slice(2);
let destination = "/home/labber/lighthouse/page-fetcher/fetchedData.txt";

const fs = require('fs');

const request = require('request');
request('http://www.google.com', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});


/*

It should take two command line arguments:

a URL
a local file path

> node fetcher.js http://www.example.edu/ ./index.html
Downloaded and saved 3261 bytes to ./index.html

*/

