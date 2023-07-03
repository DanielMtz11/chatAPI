const {Router} = require('express');

const {createConversation}= require('../controllers/conversation.controllers');

const router = Router(); //intancia de Router 

router.post("/create", createConversation);

module.exports = router

