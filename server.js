// importamos http 
const http = require("http");

const port = 3000;

// generamos nuestro server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hola Mundo!!!\n");
});

// ejecutamos el server
server.listen(port, () => {
    console.log("Server ejecutándose en http://localhost:3000/");
});