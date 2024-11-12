const http = require("http");

const port = 8083;

const coinBaseJson = require("./coinbase.json");

const server = http.createServer((req, res) => {
    const { url } = req

    if (url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.write("<h1>Currency Database</h1>")
        res.end()
    } else if (url === "/currencies") {
        res.writeHead(200, { "Content-Type": "application/json" })
        res.write(JSON.stringify(coinBaseJson))
        res.end()
    } else if (url.startsWith("/currencies/")) {
        const symbol = url.split("/")[2].toUpperCase();
        const currency = coinBaseJson.data.find(item => item.id === symbol)

        if (currency) {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.write(JSON.stringify(currency));
        } else {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.write(JSON.stringify({ message: "Invalid Symbol" }));
        }
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" })
        res.write("Not Found")
        res.end()
    }
})

server.listen(port, () => {
    console.log(`Server is Running at ${port}`)
})