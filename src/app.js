const express = require("express");
const app = express();
const port = process.env.PORT||8000
const path = require('path');

const staticPath = path.join(__dirname,"../public");
app.use(express.static(staticPath));
app.set('view engine','hbs');

//routing
app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/weather",(req,res)=>{
    res.render("Welcome to weather page");
})
app.get("*",(req,res)=>{
    res.render("error 404 check name correctly ");
})

app.listen(port,()=>{
    console.log(`Listening to the port ${port}`);
})