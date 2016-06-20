var express = require('express'), port = process.env.PORT || 3000, app = express();

// Setting up initial content
app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request', request.url);
  response.SendFile('index.html', {root: '.'});
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');

});