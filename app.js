const express = require('express')
var cors = require('cors');
const app = express();
app.use(cors());
const feedService = require('./feedService');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const feedPromises = feedService.getFeeds()
   Promise.all(feedPromises).then(data => {
     res.json(data)
   })
})

app.get('/test', (req, res) => {
  feedService.getAll()
    .then(data => {
      res.json(data);
    })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});