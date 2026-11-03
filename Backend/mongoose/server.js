const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');

const server = express();

server.use(express.urlencoded({ extended : true }));
server.use(express.json());

server.use(bodyParser.json());
server.use(cors());

server.get('/', (request, response) => {
    response.send('Server is working fine !!')
})

// Admin
require('./src/routes/admin/deafult.routes.js')(server);

// Website


// Application


server.listen(8000, () => {
    mongoose.connect('mongodb+srv://manmeetsingh28827_db_user:MTy6xZNUKhlpB9Em@qwertyhgf.qvonsrp.mongodb.net/mongoose_db?appName=qwertyhgf').then(() => console.log('Connected!'));
})
