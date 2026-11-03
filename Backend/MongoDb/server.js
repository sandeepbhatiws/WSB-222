const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { create, view, update, details, destroy } = require('./controllers/MaterialController');


// Make Executable Function
const server = express();

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(bodyParser.json());
server.use(cors());

server.get('/', (request, response) => {
    response.send('Server is working fine.')
})

server.post('/api/material/create', create)

server.post('/api/material/view', view)

server.put('/api/material/update/:id', update)

server.post('/api/material/details/:name', details)

server.delete('/api/material/delete', destroy)




server.listen(8000, () => {
    console.log('Server is working fine.')
});