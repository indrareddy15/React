const express = require("express")

const port = 8085

const app = express();

app.get("/", (req, res) => {
    console.log("Current Route: /")
})

app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})

