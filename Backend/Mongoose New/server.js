const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const materialModal = require('./src/Models/Material');
const { create, view } = require('./src/Controllers/materialController');

// To Make Executable
const server = express();

server.use(bodyParser.json())
server.use(cors());

server.use(express.json())
server.use(express.urlencoded({ extended: true }))


server.get('/', (request, response) => {
    return response.send('Server is working Fine.')
})


server.post('/api/admin/material/create', create)

server.post('/api/admin/material/view', view)

server.post('/api/admin/material/details/:id', (request, response) => {

    // materialModal.findOne({
    //     _id : request.params.id
    // })

    materialModal.findById(request.params.id)
    .then((result) => {
        if(result){
            const data = {
                _status : true,
                _message : 'Record Found',
                _data : result
            }

            return response.send(data);
        } else {
            const data = {
                _status : false,
                _message : 'No Record Found',
                _data : null
            }

            return response.send(data);
        }
    })
    .catch((error) => {
        const data = {
            _status : false,
            _message : 'Something went wrong with the server.',
            _error : error,
            _data : ''
        }

        return response.send(data);
    })

})

server.listen(8000, () => {
    mongoose.connect('mongodb://127.0.0.1:27017/offline_class')
    .then(() => console.log('Connected!'));
})