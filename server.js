const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'App.js'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
