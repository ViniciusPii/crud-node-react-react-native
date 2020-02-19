const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.send('Dev, seja bem vindo');
});

app.listen(3000);