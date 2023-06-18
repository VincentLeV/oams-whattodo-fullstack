const config = require("./utils/config")
const express = require("express")
const app = express()
const cors = require( "cors" )
const middleware = require( "./utils/middleware" )
const logger = require( "./utils/logger" )
const mongoose = require( "mongoose" )
const todoRouter = require( "./controllers/todos" )
const projectRouter = require( "./controllers/projects" )

logger.info( "Connecting to", config.MONGODB_URI )

mongoose
    .connect( config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => logger.info("Connected to MongoDB") )
    .catch( err => logger.error("Error connecting to MongoDB:", err.message) )

app.use( cors() )
app.use( express.json() )
app.use( middleware.requestLogger )

app.use( "/", todoRouter )
app.use( "/", projectRouter )

if (process.env.NODE_ENV === "test") {  
    const testingRouter = require("../controllers/testing")  
    app.use("/api/testing", testingRouter
)}

app.get( "/", (_, res) => {
    res.send( "Backend is running" )
})

app.use( middleware.unknownEndpoint )
app.use( middleware.errorHandler )

module.exports = app
