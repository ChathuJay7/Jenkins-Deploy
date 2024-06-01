const express = require("express");

const app = express()

app.get('/', (req,res) => {
    res.json({
        message: "Hello, Welcome to Backend..!"
    })
})

app.get('/home', (req,res) => {
    res.json({
        message: "Welcome to Home updated..!"
    })
})

app.get('/dashboard', (req,res) => {
    res.json({
        message: "Welcome to Dahsboard..!"
    })
})

app.get('/profile', (req,res) => {
    res.json({
        message: "Welcome to Profile..!"
    })
})

app.get('/login', (req,res) => {
    res.json({
        message: "Welcome to Login..!"
    })
})

app.listen(3000)