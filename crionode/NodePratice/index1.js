// Activity 4.1 and 4.2
const http = require("http");

const port = 8082;

const server = http.createServer((req, res) => {
    const { url } = req

    const serverInfo = {
        serverName: "Crio Server",
        version: "1.0.0",
        currentDate: new Date().toLocaleDateString(),
        currentTime: new Date().toLocaleTimeString(),
    };


    if (url === "/status") {
        res.writeHead(200, { "Content-Type": "application/json" })
        res.write(JSON.stringify(serverInfo));
        res.end()
    } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`<h1>Hello from server</h1>`);
        res.end();

    }
})

server.listen(port, () => {
    console.log(`Server is running in the ${port}`)
})