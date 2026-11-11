const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()
require('./src/Config/database.js');

const server = express();

server.use(express.json());
server.use(express.urlencoded({
    extended: true
}));

server.use(bodyParser.json());
server.use(cors());

server.get('/', (request, response) => {
    response.send('Server is working !!')
})

// Admin
require('./src/Routes/Admin/materialRoutes.js')(server);


// Website


// Application


server.listen(process.env.PORT, () => {
    console.log('Server is working Fine.')
});