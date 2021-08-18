const express = require('express')
const app = express()


app.set('view engine', 'hbs')
app.get('/',(req,res) =>{
    res.render("index", {name:"Taliban"})
})

const PORT = process.env.PORT || 5001
app.listen(PORT);
console.log("Sever is running: ", PORT)