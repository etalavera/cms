const express = require('express');
const app = express();
const port = 8080;


app.use(express.static('./dist/cms'));

app.get('/*', (req, res) => {
    res.sendFile('index.html', {root: 'dist/cms'});
});

app.listen(process.env.PORT || port, () => {
    console.log(`App is running on port ${port}`)
});