module.exports = () => {
    
    const express = require("express");
    const app = express();
    const port = 8080

    app.get("/api/v1/persons", (req, res) => {
        res.send('Hello World!')
    })
    
    // app.post("/api/v1/persons", (req, res) => {
    
    // })
    
    // app.get("/api/v1/persons/{id}", (req, res) => {
    
    // })
    
    // app.put("/api/v1/persons/{id}", (req, res) => {
    
    // })
    
    // app.delete("/api/v1/persons/{id}", (req, res) => {
    
    // })
    
    // app.listen(port, () => {
    //     console.log(`Example app listening on port ${port}`)
    // })

}