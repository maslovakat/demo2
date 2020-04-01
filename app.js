const express = require('express');
const bodyParser = require('body-parser');
require('./db');

let app = express();

app.use(bodyParser.json());

app.use('/products', require('./modules/products/products.routes'));
app.use('/orders', require('./modules/orders/orders.routes'));

app.use(express.static(__dirname + '/public'));
app.get('/', function(req,res) { 
    res.sendFile(__dirname + '/public/index.html');
})

app.listen(4000, () => console.log('server has started'))
module.exports = app;