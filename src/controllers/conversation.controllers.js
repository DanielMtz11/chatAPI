const conversationServices = require("../services/conversationServices");
const participantsServices = require("../services/participants.services");
// const participantsServices = require("../services/participants.services");


const createConversation= async(req, res)=> {
    try {

        const {title, created_by, participant} = req.body;
        
        console.log(`creado por: ${created_by} in controllers`);
        
        // const conversation = req.body;
        // const result = await conversationServices.createConv(conversation);
        if(!title || !created_by || !participant ){

            console.log(title);
            // console.log(createdBy);
            console.log(participant);
            return res.status(400).json({message: "mising data"});
        }

        const conversation = await conversationServices.add({title, created_by});
        
        if(conversation){
            const {id} = conversation;
            console.log(`id conv: ${id}`);
            // console.log(`creado por: ${createdBy}`);
            console.log(`participante: ${participant}`);
            await participantsServices.add(id, created_by );
            await participantsServices.add(id, participant);
            res.status(201).json({message: "conversation created"});}
        
            // if( result){
            //     res.status(201).json({Message: "conversation created !!"});
            // }
    
    } catch (error) {
        res.status(400).json(error.message);    
    }
}

module.exports = {createConversation};