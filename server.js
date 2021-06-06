const express = require('express');
const app = express();
const path = require('path');
const port = app.listen(process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/index.html', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/about.html', function (req, res) {
    console.log("Got a GET request for the about page");
    res.sendFile(path.join(__dirname + '/about.html'));
 })

 app.get('/blog.html', function (req, res) {
    console.log("Got a GET request for the blog page");
    res.sendFile(path.join(__dirname + '/blog.html'));
 })

 app.get('/shop.html', function (req, res) {
    console.log("Got a GET request for the shop page");
    res.sendFile(path.join(__dirname + '/shop.html'));
 })


app.listen(port);
