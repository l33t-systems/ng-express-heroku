var express = require('express');
var app = express();

const cors = require('cors');
require('dotenv').config();

app.use(cors());

const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
        ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}

//app.use(forceSSL());
app.use(express.static(__dirname + '/dist'));
app.use(function(req, res, next) {
  res.sendFile(__dirname + '/dist/index.html');
});

var router = express.Router();

router.get('/public', function(req, res) {
  res.json({ message: "Hello from a public endpoint! You don't need to be authenticated to see this." });
});

app.use('/api/v1', router);

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);



