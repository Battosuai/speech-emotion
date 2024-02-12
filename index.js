const path = require('node:path');
const express = require('express');
const Sentiment = require('sentiment');

const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/emotion', function (req, res) {
    const sentiment = new Sentiment();
    const text = req.query.text;
    console.log('text', text);
    const score = sentiment.analyze(text);
    console.log('score', score);
    res.send(score);
});

app.listen(port, function () {
    console.log(`Listening on port ${port}`);
});
