const express = require('express');// that how we grab the file
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

app.listen(8080, function(){
    console.log('listening at port 8080');
})

require('./server/config/mongoose');
require('./server/config/routes')(app);
