//model para salvar novo usuário
const { Schema, model} = require('mongoose');

const DevSchema = new Schema({//estrutura da tabela no bd para armazenar o usuário
    name: {
        type: String,
        required: true
    },
    user:{
        type: String,
        required: true
    },
    bio: String,
    avatar: {
        type: String,
        required: true
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }],
    dislikes: [{
        
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }]
    }, {
        timestamps: true  //criar createdAt e updatedAt
    });

    module.exports = model('Dev', DevSchema); //1º parametro que será utilizado posteriormente