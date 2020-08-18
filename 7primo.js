const express = require('express');
const app = express();
const path= require('path')
const ejercicios = require('./ejercicios');

//define routes here..
//The first parameter is a path of a route which will start after base URL
app.get("/", (req, res) => {
   res.sendFile(path.resolve(__dirname, '7primo.html'));
});

app.get('/primo/', (req, res) => {
  const result = ejercicios.primo();
  res.send('El resultado es : ' + result);
})

//creates the Node.js web server at the specified host an port
const server = app.listen(3000, function () {
  console.log('El servidor funciona...');
})