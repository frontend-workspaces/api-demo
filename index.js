// index.js
const express = require('express')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

console.log('PORT:', PORT);


app.get('/', (req, res) => {
  res.status(200).json({
    version: '1.0.0',
    port: PORT
  });
})

app.get('/home', (req, res) => {
  res.status(200).json({
    path: 'Home'
  });
})


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});