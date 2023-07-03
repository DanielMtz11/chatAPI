// const conversationModel = require("../models/conversations");
const {conversations } = require('../models');
require('dotenv').config;


class conversationServices{

    static async add ({title, created_by}){
        try {
            // console.log(`title: ${title}`);
            // console.log(`creado por: ${created_by}`);

            const result =  await conversations.create({title, created_by});
            return result;
        } catch (error) {
            throw error;
        }
    }



}

module.exports = conversationServices