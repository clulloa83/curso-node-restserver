const express = require('express');
const cors = require('cors');
require('dotenv').config();


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        this.middleware();

        this.routes();
    }

    middleware(){

        // CORS
        this.app.use(cors());

        //lectura y parseo del body
        this.app.use(express.json());


        //Directorio Publico
        this.app.use( express.static('public'));
    }

    routes(){

        this.app.use(this.usuariosPath, require('../routes/usuarios'));

    }

    listen(){
        this.app.listen( this.port,  () => {
            console.log(`sevidor corriendo en puerto ${ this.port }`);
        });
    }

}

module.exports = Server;