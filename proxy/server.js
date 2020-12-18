/**
 * 
 * Proxy server: localhost:3001
 * 
 */

const express = require('express');
const request = require('request');
const app = express();

const TOKEN = "3935589606453569";

app.get('/api', function (req, res) {
  request(`https://superheroapi.com/api/${TOKEN}/search/Superman`, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log(body);
      res.send(body);
    }
  });
});

app.listen(3001);
console.log('Server running on port %d', 3001);

