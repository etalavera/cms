const express = require('express');
const { CLIENT_RENEG_LIMIT } = require('tls');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(port, () => {
    console.log(`Express is runnint on http://localhost:${port}`);
});