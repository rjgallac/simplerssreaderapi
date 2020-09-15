const express = require('express')
const request = require('request');
var parseString = require('xml2js').parseString;

const app = express()
const port = process.env.PORT || 3000;

feeds = [
    'https://www.hotukdeals.com/rss/all'
]

app.get('/', (req, res) => {
  request(feeds[0], { json: true }, (err, response, body) => {
    if (err) { return console.log(err); }
        parseString(body, function (err, result) {
            res.json(result)
        });
    });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})