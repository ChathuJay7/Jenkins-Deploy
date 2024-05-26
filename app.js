const express = require("express");

const app = express()

app.get('/', (req,res) => {
    res.json({
        message: "Hello Backend Updated..!"
    })
})

app.get('/home', (req,res) => {
    res.json({
        message: "Hello To Home..!"
    })
})

app.get('/dashboard', (req,res) => {
    res.json({
        message: "Welcome to Dahsboard..!"
    })
})

app.listen(3000)