const express = require("express");
const router = express.Router();

router.get("/persons/api/v1/persons", (req, res) => {
    res.send('Hello World!')
})

router.post("/persons/api/v1/persons", (req, res) => {

})

router.get("/persons/api/v1/persons/:id", (req, res) => {

})

router.put("/persons/api/v1/persons/:id", (req, res) => {

})

router.delete("/persons/api/v1/persons/:id", (req, res) => {

})

module.exports = router