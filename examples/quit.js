var fs = require('fs');
var quitter = require('..')();
var readFile = fs.readFile(__dirname + '/fake.txt', quitter(handleFile));

function handleFile(buffer) {
  console.log('here is the data buffer: ', buffer);
};
