var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

var user = require('./routes');
// routes(app);
app.use('/api', user)

// App Server Connection
app.listen(process.env.PORT || 3000, () => {
    console.log(`aplikasi running pada port ${process.env.PORT || 3000}`)
  })