const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers = {};

io.on('connection', socket => {
  const { user } = socket.handshake.query;

  connectedUsers[user] = socket.id;
});

mongoose.connect('mongodb+srv://leonel:Gu4x1n1m@clusteromnistack-l8cx4.mongodb.net/omnistack8?retryWrites=true&w=majority', {useNewUrlParser: true})//cria o banco de dados omnistack8 caso não exista

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);

