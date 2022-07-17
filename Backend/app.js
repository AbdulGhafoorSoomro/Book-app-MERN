const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/book-routes')

const app = express(); 

// Middlewares 
app.use(express.json())
app.use("/books",router) //localhost:5000/books

mongoose.connect("mongodb://localhost:27017/bookstore",{ useUnifiedTopology: true}
).then(()=> console.log('Connected to Data base'))
.then(()=>{app.listen(5000)})
.catch((err)=>{console.log(err)})