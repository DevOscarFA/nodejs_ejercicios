var express = require('express'),
     port = 8181;

var app = express();

app.get('/product/:id_product/:product/:des', function(request, response){
    console.log(request.params);
    response.status(200);
    response.set('Content-Type', 'text/html');
    response.end(
        '<html><body>' +
            '<ul>'+
                '<li>id: ' + request.params.id_product + '</li>'+
                '<li>producto: ' + request.product + '</li>'+
                '<li>descripcion: ' + request.params.des + '</li>'+
            '</ul>'+
        '</body></html>'
    );
});

app.get('/user/:nane/:last_name', function(request, response){
    console.log(request.params);
    response.status(200);
    response.set('Content-Type', 'text/html');
    response.end(
        '<html><body>' +
            '<ul>'+
                '<li>nombre: ' + request.params.nane + '</li>'+
                '<li>apellido: ' + request.params.last_name + '</li>'+
            '</ul>'+
        '</body></html>'
    );
});

app.get('*', function(request, response){

    response.end('lab2_3');
});

app.listen(port, function(){

    console.log('listen on %s', port);
});
