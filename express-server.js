const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/parse', (req, res) => {
  const site = req.query.endpoint;
  const tagName = req.query.tag;
  let html;
  axios.get(`http://${site}/`)
    .then(siteData => {
      html = siteData.data;
      console.log(html)
      return html;
    });
  
//  const parser = new DOMParser();
//  let doc = parser.parseFromString(html, "text/html");
  res.end("hello");
});

app.listen(8080, () => {
  console.log(' ʕ´• ᴥ •`ʔ listening on port 8080 ʕ´• ᴥ •`ʔ ');
});