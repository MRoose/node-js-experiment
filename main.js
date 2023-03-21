// dependencies
const express = require("express");
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./openapi.json');

// express settings
const app = express();
const port = 8080

// routers
const personRouter = require("./src/routes/person.js")

// swagger settings
app.use("/swagger-ui.html", swaggerUI.serve, swaggerUI.setup(swaggerDocument))
// enable routers
app.use(personRouter)

// start server
app.listen(port, () => {
    console.log(`Application listening on port ${port}`)
})