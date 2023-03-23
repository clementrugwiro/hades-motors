const express = require('express');
const mongoose = require('mongoose')
const  bodyParser = require ('body-parser')
const  users = require ("./routes/users.js")
const messages = require ("./routes/messages.js")
const about = require ("./routes/about.js")
const cars = require ("./routes/cars.js")
const cors = require("cors")

const app = express();
      app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});



const uri = 'mongodb+srv://hunkclement:admin123@cluster0.fxl3j9q.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true,})
    .then(()=>{
       console.log("connected to database")
    })
app.use(bodyParser.json())



    app.use("/api",users)
    app.use("/api",messages)
    app.use("/api",about)
    app.use("/api",cars)