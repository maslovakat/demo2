const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());

app.use('/products', require('./modules/products/products.routes'));

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/common'));
app.get('/', function(req,res) {
    res.sendFile(__dirname + '/public/index.html');
    res.sendFile('./public/index.html', {root: __dirname});
})

app.listen(4000, () => console.log('server is started'))
module.exports = app;