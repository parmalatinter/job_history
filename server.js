
var express = require('express');
var app = express();

var user = process.env.USER;
var pass = process.env.PASS;
var mdToHtml = require('./md-to-html');

app.set('port', process.env.PORT || 3000);

if (user && pass) {
  app.use(express.basicAuth(user, pass));
}

app.use(express.logger('dev'));
app.use(express.compress());
app.use(express.static(__dirname + '/public'));
app.use('/static', express.static(__dirname + '/public'));
app.use('/mdToHtml', mdToHtml.exec);

app.listen(app.get('port'), function() {
  console.log('Server listening on port %s', app.get('port'));
});