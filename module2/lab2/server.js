var express = require('express'),
    port = 8181;

var app = express();

app.get('*', function(request, response){
    response.end('hello lab2');
});

app.listen(port, function(){
    'open your browser at http://127.0.0.1:%s', port
});