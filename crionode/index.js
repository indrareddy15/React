const http = require("http");

const port = 8083


let todoList = ["Complete Node Byte", "Play Cricket"];


http.createServer((req, res) => {
    const { method, url } = req

    const parseReqBody = (req) => {
        return new Promise((resolve, reject) => {
            let data = ''
            req.on('data', chunk => {
                data += chunk;
            });
            req.on('end', () => {
                try {
                    resolve(JSON.parse(data))
                } catch (error) {
                    reject("Invalid JSON")
                }
            })
        })
    }

    if (url === "/todos") {
        if (method === "GET") {
            res.writeHead(200, { "Content-Type": "application/json" })
            res.write(JSON.stringify(todoList))
        } else if (method == "POST") {
            parseReqBody(req).then((data) => {
                if (data && data.name) {
                    todoList.push(data.name)
                    res.writeHead(201);
                    res.end();
                } else {
                    res.writeHead(400, { "Content-Type": "text/html" });
                    res.write("Bad Request: 'name' property is required");
                    res.end();
                }
            }).catch(() => {
                res.writeHead(400, { "Content-Type": "text/html" });
                res.write("Invalid JSON format");
                res.end();
            })
        } else if (method === "DELETE") {
            parseReqBody(req).then((data) => {
                if (data && data.name) {
                    const idx = todoList.indexOf(data.name);
                    if (idx !== -1) {
                        todoList.splice(idx, 1);
                        res.writeHead(204);
                        res.end()
                    } else {
                        res.writeHead(404, { "Content-Type": "text/html" });
                        res.write("Not Found: Todo item does not exist");
                        res.end();
                    }
                }
            }).catch(() => {
                res.writeHead(400, { "Content-Type": "text/html" });
                res.write("Invalid JSON format");
                res.end();
            })
        } else {
            res.writeHead(405, { "Content-Type": "text/html" });
            res.write("Method Not Allowed");
            res.end();
        }
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("404 Not Found");
        res.end();
    }
}).listen(port, () => {
    console.log(`Server is Running ai ${port}`)
})