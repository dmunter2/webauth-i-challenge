const session = require('express-session')
const knexSessionStore = require('connect-session-knex')(session);

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./auth/auth-router');
const usersRouter = require('./users/user-router');

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

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
    res.json({ api: 'up' });
});

module.exports = server;














