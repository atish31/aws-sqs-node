const express = require('express');
const bodyParser = require('body-parser');

const PORT = 8000;
const app = express();

app.use(bodyParser.json());
app.get('/index', (req, res) => {
    res.send('Service 1 here');
})

app.listen(PORT)