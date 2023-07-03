const authRoutes = require("./auth.routes");
const conversationsRoutes = require("./conversations.routes");


const routerApi =(app)=>{
    app.use("/api/v1/auth",authRoutes);
    app.use("/api/v1/conversations",conversationsRoutes);
}


module.exports = routerApi