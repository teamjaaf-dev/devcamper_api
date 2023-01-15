const express = require('express')
const dotenv = require('dotenv') 
const connectDB  = require('./config/db')

// load env vars
dotenv.config({ path: './config/config.env'})


// connect to database 
connectDB()


// Route files 
const bootcamps = require('./routes/bootcamps')



const app = express()

// Moount Routers 
app.use('/api/v1/bootcamps', bootcamps)

const PORT = process.env.PORT || 5000

const server = app.listen(
    PORT, 
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)

// @desc For me this is the very best practice
// Handle unhandled promise rejection 
process.on('unhandledRejection', (err, Promise) => {
    console.log(`Error: ${err.message}`)

    // Close server and exit process
    server.close(() => process.exit(1))
})