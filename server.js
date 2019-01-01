const http = require('http');
const port = 3000;
http.createServer((req, res) => {
  res.writeHead(300, {'Content-Type': 'application/json'});
  res.end('Hello World\n');
}).listen(port);

console.log(`Server running at http://localhost:${port}/`);

//ran the file in localhost, opend a new terminal and ran localhost to find the program still running, changed content type to text plain and application/json, by terminating the terminal and restarting the program.