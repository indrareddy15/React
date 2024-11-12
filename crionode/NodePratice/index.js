const http = require("http")
const port = 8081;

const server = http.createServer((req, res) => {
    const currDate = new Date();
    const localDate = currDate.toLocaleDateString()
    const localTime = currDate.toLocaleTimeString()

    console.log(`Local Date: ${localDate}`);
    console.log(`Local Time: ${localTime}`);

    res.writeHead(200, { "Content-Type": "text/plain" })
    res.write("<h1>Hello World from server Indra</h1>")
    res.end()
})

server.listen(port, () => {
    console.log(`Server is Running in the ${port}`)
})