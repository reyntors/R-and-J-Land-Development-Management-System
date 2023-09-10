const express = require('express')
const app = express()
const mongoose = require('mongoose');


const PORT = 3000;

//routes

app.get('/', (req, res)=>{
    res.send('Hello Node API')
})

app.get('/blog', (req, res)=>{
    res.send('Hello Blog my name is Reynard')
})


app.listen(PORT, () =>{
    console.log(`Server is listen on PORT ${PORT}`)
})