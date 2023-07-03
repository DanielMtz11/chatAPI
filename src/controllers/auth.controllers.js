const authServices = require("../services/authServices");

const register = async(req, res, next)=>{
    try {
        const user = req.body;
        
        
        
        const result = await authServices.register(user);
        if(result){
            res.status(201).json({Message: "user created"});
        }
        else{
            // next();
            next({message:"something wrong"});

        }
    } catch (error) {

        next(error);
    }
    
};

const getUsers = async(req, res)=>{
    try {
        const result = await authServices.getU();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.Message);
        
    }
};

const login = async(req, res)=>{
    try {
        const {email, password} = req.body;
        // !email || !password ?
        if(!email ){
            res.status(400).json({
                error: "missing data" ,                   
                Message: "not email provided"})};
        
        if(!password){
            res.status(400).json({
                error: "missing data",
                Message: "not password provided"
            });
        };
            
        const result = await authServices.logIn({email, password});
        //isValid es la validacion de la contraseña
            if(result.isValid){
                const {firstname, lastname, username, id, email} = result.user;
                const userData = {firstname, lastname,email} ;
                // const token = authServices.genToken(userData);
                // result.user.token = token;
                res.json(userData);
            }
        // res.status(200).json(result);

    } catch (error) {
            next(error);
        // res.status(400).json({Message:"something wrong"});
    }
}

module.exports = {register, getUsers, login}