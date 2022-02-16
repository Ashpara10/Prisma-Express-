const express = require("express");
const {PrismaClient}=require('@prisma/client')
const app = express();
// const prisma = new PrismaClient()

app.get("/", (req,res) => {
    res.send("Hello World")
});


app.listen(5000,()=>{
    console.log("app Listening at http://localhost:5000")
})