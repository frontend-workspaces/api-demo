// index.js
const express = require('express')
const app = express()
const PORT = 4000


app.get('/', (req, res) => {
  res.status(200).json({
    version: '1.0.0'
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