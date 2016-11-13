var express = require('express');
var bodyParser = require('body-parser');

var dht11 = require('./app/dht11');

var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/dht11', function(req, res) {
    var data;

    while (!data) {
        data = dht11.getActualData();
    };

    res.json(data);
})

app.listen(8081, function() {
    console.log('Listening on 8081');
})