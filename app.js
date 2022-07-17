const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/book-routes')

const app = express(); 

// Middlewares 

app.use("/books",router) //localhost:5000/books


mongoose.connect("mongodb+srv://admin:123@cluster0.f1kwm.mongodb.net/bookstore?retryWrites=true&w=majority"
).then(()=> console.log('Connected to Data base'))
.then(()=>{app.listen(5000)})
.catch((err)=>{console.log(err)})