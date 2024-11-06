const http = require('http');

const port = 8081;

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.write("<h1>Hello World</h1>");

    res.end();
}).listen(() => {
    console.log(`Server is running on port ${port}`);
})