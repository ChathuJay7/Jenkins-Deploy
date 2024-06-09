const express = require("express");

const app = express()

app.get('/', (req,res) => {
    res.json({
        message: "Hello, Welcome to Backend..!"
    })
})

app.get('/home', (req,res) => {
    res.json({
        message: "Welcome to Home..!"
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

app.get('/auth', (req,res) => {
    res.json({
        message: "Welcome to Auth...!"
    })
})

app.get('/change-password', (req,res) => {
    res.json({
        message: "Welcome to Change Password...!"
    })
})

app.listen(3000)