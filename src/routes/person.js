const express = require("express");
const router = express.Router();
const { Person } = require("../models/person.js")

router.get("/persons/api/v1/persons", (req, res) => {
    // #swagger.tags = ['person']
    // #swagger.description = 'Desc'
    res.json(Person.findAll())
})

router.post("/persons/api/v1/persons", (req, res) => {
    // #swagger.tags = ['person']
    // #swagger.description = 'Desc'
    /* #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    $ref: "#/definitions/Person"
                }
            }
        }
    } */
    console.log(typeof req.body);
})

router.get("/persons/api/v1/persons/:id", (req, res) => {
    // #swagger.tags = ['person']
    // #swagger.description = 'Desc'
    /* #swagger.responses[200] = {
        description: "Some description... OpenAPI 3.x",
        content: {
            "application/json": {
                schema:{
                    $ref: "#/definitions/Person"
                }
            }           
        }
    } */
})

router.put("/persons/api/v1/persons/:id", (req, res) => {
    // #swagger.tags = ['person']
    // #swagger.description = 'Desc'
})

router.delete("/persons/api/v1/persons/:id", (req, res) => {
    // #swagger.tags = ['person']
    // #swagger.description = 'Desc'
})

module.exports = router