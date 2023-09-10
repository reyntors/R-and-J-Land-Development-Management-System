const express = require('express')
const app = express()


const PORT = 3000;

//routes

app.get('/', (req, res)=>{
    res.send('Hello Node API')
})

app.listen(PORT, () =>{
    console.log(`Server is listen on PORT ${PORT}`)
})