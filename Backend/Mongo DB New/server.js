const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const database = require('./dbConfig/database.js');
const mongodb = require('mongodb');
const { create } = require('./category.controller.js');

// To Make Executable
const server = express();

server.use(bodyParser.json())
server.use(cors());

server.use(express.json())
server.use(express.urlencoded({ extended: true }))


server.get('/', (request, response) => {
    return response.send('Server is working Fine.')
})

// server.post('/api/admin/category/create', async(request, response) => {

//     const db = await database();
//     const result = await db.collection('categories').insertOne({
//         name : 'Mens',
//         slug : 'mens'
//     });

//     if(result.acknowledged){
//         const data = {
//             _status : true,
//             _message : 'Record Created',
//             _data : result
//         }

//         return response.send(data)
//     } else {
//         const data = {
//             _status : false,
//             _message : 'Something went wrong !!',
//             _data : result
//         }

//         return response.send(data)
//     }
// })

server.post('/api/admin/category/create', create)

server.post('/api/admin/category/view', async(request, response) => {

    const db = await database();
    db.collection('categories').find().toArray()
    .then((result) => {
        if(result.length > 0){
            const data = {
                _status : true,
                _message : 'Record Found.',
                _data : result
            }

            return response.send(data)
        } else {
            const data = {
                _status : false,
                _message : 'No Record Found',
                _data : []
            }

            return response.send(data)
        }
        
    })
    .catch((error) => {
        const data = {
            _status : false,
            _message : 'Something went wrong !!',
            _data : []
        }

        return response.send(data)
    })
})

server.put('/api/admin/category/update/:id', async(request, response) => {

    const db = await database();
    db.collection('categories')
    .updateOne({
        _id : new mongodb.ObjectId(request.params.id)
    }, {
        $set : request.body
    })
    .then((result) => {
        if(result.modifiedCount > 0){
            const data = {
                _status : true,
                _message : 'Record Updated.',
                _data : result
            }

            return response.send(data)
        } else {
            const data = {
                _status : false,
                _message : 'No Record Updated',
                _data : null
            }

            return response.send(data)
        }
        
    })
    .catch((error) => {
        const data = {
            _status : false,
            _message : 'Something went wrong !!',
            _data : null
        }

        return response.send(data)
    })
})




server.listen(8000, () => {
    console.log('Server is working Fine.')
})