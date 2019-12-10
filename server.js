const session = require('express-session');
const express = require('express');
const knexSessionStore = require('connect-session-knex')(session);
const helmet = require('helmet')
const cors = require('cors')
const apiRouter = require('./api/api-router')
const configureMiddleware = require('./api/configure-middleware');




const sessionOptions = {
    name: "mycookie",
    secret: "cookiesgood",
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: false,

    store: new knexSessionStore({
        knex: require('./database/db-config'),
        tablename: 'sessions',
        sidfilename: 'sid',
        createtable: true,
        clearInterval: 1000 * 60 * 60
    })
}

const server = express();


server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionOptions));

server.use('/api', apiRouter)


module.exports = server;














