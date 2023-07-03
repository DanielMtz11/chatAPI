const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
require('dotenv').config();
const options ={
    apis:["./src/routes/auth.routes.js","./src/models/users.js"],
    definition:{
        openapi: "3.0.0",
        info : {
            title: "chat aplication hecha con Node y Express",
            version: "0.5",
            description: "API para aplicacion de mensajeria",
        }
    }
};

//generar una especificacion en json para nuestra documentacion.
const swaggerSpec = swaggerJSDoc(options);

const swaggerJSDocs = (app, port)=>{
    //generar una ruta donde se mostrara la documentacion
    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec)); //en esta ruta vamos a consumir toda la documentacion
    app.get("/api/v1/docs.json", (req, res)=>{
        res.setHeader({"Content-Type":"application/json"});
        res.send(swaggerSpec);
    });

    console.log(`la documentacion esta disponible en ${process.env.URL}:${port}/api/v1/docs`)
};

module.exports = swaggerJSDocs