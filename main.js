const express = require("express");
const app = express();
const port = 8080

const personController = require("./controller/PersonController.js")()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})