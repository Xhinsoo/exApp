const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    console.log("home page")
})


app.listen(3000,()=>{
    console.log("listening on port 3000")
})