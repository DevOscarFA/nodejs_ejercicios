var http = require('http');

var pages = [
    {route: '/', output: 'Bienvenido a oscar.com'},
    {route: '/angular/laboratorio1', output: 'Ejercicio de angular js'},
    {route: '/node/laboratorio2', output: 'Ejercicio de node js'},
    {route: '/node/laboratorio3', output: 'Se esta creando el laboratorio'},
    {route: '/angular/laboratorio1/lab1', output: 'Introduccion a angular'},
    {route: '/node/descarga', output:'Node se encuentra en su version 4.2.2 porque integra io.js'},
    
];

http.createServer(function(request, response){
    var look = decodeURI(request.url);

    pages.forEach(function(page){

        if(page.route === look){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(typeof page.output === 'function' ? page.output() : page.output);
        }
    });

    if(!response.finished){
        response.writeHead(404);
        response.end('Pagina no disponible');
    }
}
).listen(8181);