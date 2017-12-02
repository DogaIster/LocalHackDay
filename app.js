const http = require('http');
var pdf = require('pdfkit'); 
var fs = require('fs'); 

const hostname = '127.0.0.1';
const port = 3000;

// make the pdf
var myDoc = new pdf; 
myDoc.pipe(fs.createWriteStream('node.pdf')); 
myDoc.font('Times-Roman')
    .fontSize(48)
    .text('NodeJS PDF Document', 100, 100); 
myDoc.end(); 

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});