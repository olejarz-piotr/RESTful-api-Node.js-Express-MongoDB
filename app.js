const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');


//Routes

app.get('/', (req, res) => {
    res.send('We are in home')

})
app.get('/posts', (req, res) => {
    res.send('We are in home')

})


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('connected');
})

app.listen(5000);