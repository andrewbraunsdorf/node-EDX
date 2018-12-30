const http = require('http');
const url = 'http://nodeprogram.com';
http.get(url, (response) => {
  response.on('data', (chunk) => { 
    console.log(chunk.toString('utf8'));
  });
  response.on('end', () => {
    console.log('response has ended');
  });
}).on('error', (error) => {
  console.error(`Got error: ${error.message}`);
});

//get a URL and targets that url content which we download, using default processing where you do not need to wait till the end to start downloading data, used JSON.parse, used POST commands, for a POST request