const app = require('./app');
require("dotenv").config();
const swaggerJSDocs = require('../swagger');

const PORT = process.env.PORT || 9000;


app.listen(PORT, ()=>{
    console.log(`servidor escuchando en el puerto ${PORT}`);
    swaggerJSDocs(app, PORT);
    // console.log(process);
});