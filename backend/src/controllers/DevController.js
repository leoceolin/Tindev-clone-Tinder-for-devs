const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async index(req,res){
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);

        const users = await Dev.find({
            $and:[
                { _id: { $ne: user } },
                { _id: { $nin: loggedDev.likes } },
                { _id: { $nin: loggedDev.dislikes } }
            ]
        })

        return res.json(users);
    },

    async store(req,res){

        const { username } = req.body;

        const userExists = await Dev.findOne({user: username}); //verifica se o usuário já existe

        if(userExists){
            console.log("Usuario já existe!");
            return res.json(userExists);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);

        const { name, bio, avatar_url: avatar } = response.data; //avatar_url: avatar - define avatar_url como avatar

        const dev = await Dev.create({
            name, //campo com o mesmo nome da API
            user: username,
            bio,
            avatar
        })

        console.log("Usuário criado com sucesso!");
        return res.json(dev);
    }
};