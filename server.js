const http = require('http');

const port = 4000;
const name = 'Tushar Cahudhari';

const server = http.createServer((req, res) => {
  console.log(name);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(`Hello, ${name}!`);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
