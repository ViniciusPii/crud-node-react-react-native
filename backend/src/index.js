const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(require('./routes'));


app.listen(3000);