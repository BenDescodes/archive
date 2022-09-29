const http = require('http'),
app = require('./app');

// normalizePort :  renvoie un port valide, qu'il soit fourni sous la forme d'un mumero ou d'une chaine
const normalizePort = val =>{
    const port = parseInt(val,10);
    if(isNaN(port)) return val;
    if(port >= 0) return port;

    return false;
}
//initialisation du port
const port = normalizePort(process.env.PORT || 3001);
app.set('port',port);
// gestion des erreurs

const errorHandler = error =>{
    if(error.syscall !== 'listen') throw error;

    const adress = server.address();
    const bind = typeof adress === "string" ? 'pipe' + adress : 'port: '+ port;

    switch(error.code){
        case 'EACCES':
            console.error(bind + ' requires e;evated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
const server = http.createServer(app);
server.on('error', errorHandler);
server.on('listening', () => {
    const adress = server.address();
    const bind = typeof adress === 'string' ? 'pipe '+ adress : 'port '+ port;
    console.log("Listening on "+bind);
});
server.listen(port);