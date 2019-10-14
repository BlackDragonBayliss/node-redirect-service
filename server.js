const express = require('express');
const app = express();
const path = require('path')

const port = 6111;

app.use(express.static(path.join(__dirname, 'myApp')));

app.listen(port, () => console.log(`Example a listening on port ${port}!`))