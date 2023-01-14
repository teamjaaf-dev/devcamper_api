const express = require('express')
const dotenv = require('dotenv')
const { restart } = require('nodemon')


// load env vars
dotenv.config({ path: './config/config.env'})

const app = express()

// routes 

// get all bootcamps
app.get('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({
        success: true,
        msg: "Show all bootcamp"
    })
})

// get a single bootcamp
app.get('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({
        success: true,
        msg: `Show bootcamp ${req.params.id}`
    })
})

// create new post
app.post('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({
        success: true,
        msg: "Create new bootcamp"
    })
})


// update new bootcamp
app.put('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({
        success: true,
        msg: `Update bootcamp ${req.params.id}`
    })
})

// delete a post
app.delete('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({
        success: true,
        msg: `Delete bootcamp ${req.params.id}`
    })
})

const PORT = process.env.PORT || 5000

app.listen(
    PORT, 
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)