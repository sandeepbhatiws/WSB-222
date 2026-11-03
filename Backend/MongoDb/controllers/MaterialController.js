const { response } = require('express');
const mongodb = require('mongodb');
const dbConnection = require('../dbconfig/database.js');

exports.create = async (request, response) => {
    try {
        const db = await dbConnection();
    
        db.collection('materials').insertOne(request.body)
        .then((result) => {
            const data = {
                _status : true,
                _message : 'Record Inserted !',
                _data : result
            }

            return response.send(data)
        })
        .catch((error) => {
            const data = {
                _status : false,
                _message : 'Something went wrong !',
                _error : error,
                _data : ''
            }

            return response.send(data)
        })    
    } catch (error) {
        const data = {
            _status : false,
            _message : 'Something went wrong with server !',
            _error : error,
            _data : ''
        }

        return response.send(data)
    } 
}

exports.view = async(request, response) => {
    try {
        const db = await dbConnection();
    
        db.collection('materials').find().toArray()
        .then((result) => {
            if(result.length > 0){
                const data = {
                    _status : true,
                    _message : 'Record Found !',
                    _data : result
                }

                return response.send(data)
            } else {
                const data = {
                    _status : false,
                    _message : 'No Record Found !',
                    _data : []
                }

                return response.send(data)
            }
            
        })
        .catch((error) => {
            const data = {
                _status : false,
                _message : 'Something went wrong !',
                _error : error,
                _data : ''
            }

            return response.send(data)
        })    
    } catch (error) {
        const data = {
            _status : false,
            _message : 'Something went wrong with server !',
            _error : error,
            _data : ''
        }

        return response.send(data)
    }
}

exports.update = async (request, response) => {
    try {
        const db = await dbConnection();

        console.log(request.params.id)
    
        db.collection('materials').updateOne({
            _id : new mongodb.ObjectId(request.params.id)
        }, {
            $set : request.body
        })

        .then((result) => {
            const data = {
                _status : true,
                _message : 'Record Updated !',
                _data : result
            }

            return response.send(data)
        })
        .catch((error) => {
            const data = {
                _status : false,
                _message : 'Something went wrong !',
                _error : error,
                _data : ''
            }

            return response.send(data)
        })    
    } catch (error) {
        console.log(error)
        const data = {
            _status : false,
            _message : 'Something went wrong with server !',
            _error : error,
            _data : ''
        }

        return response.send(data)
    } 
}

exports.details = async(request, response) => {
    try {
        const db = await dbConnection();
    
        db.collection('materials').findOne({
            name : request.params.name
        })
        .then((result) => {
            if(result){
                const data = {
                    _status : true,
                    _message : 'Record Found !',
                    _data : result
                }

                return response.send(data)
            } else {
                const data = {
                    _status : false,
                    _message : 'No Record Found !',
                    _data : null
                }

                return response.send(data)
            }
            
        })
        .catch((error) => {
            const data = {
                _status : false,
                _message : 'Something went wrong !',
                _error : error,
                _data : ''
            }

            return response.send(data)
        })    
    } catch (error) {
        const data = {
            _status : false,
            _message : 'Something went wrong with server !',
            _error : error,
            _data : ''
        }

        return response.send(data)
    }
}

exports.destroy = async(request, response) => {
    try {
        const db = await dbConnection();
    
        db.collection('materials').deleteOne({
            name : request.body.name
        })
        .then((result) => {
            if(result.deletedCount > 0){
                const data = {
                    _status : true,
                    _message : 'Record Deleted !',
                    _data : result
                }

                return response.send(data)
            } else {
                const data = {
                    _status : false,
                    _message : 'No Record Found !',
                    _data : null
                }

                return response.send(data)
            }
            
        })
        .catch((error) => {
            const data = {
                _status : false,
                _message : 'Something went wrong !',
                _error : error,
                _data : ''
            }

            return response.send(data)
        })    
    } catch (error) {
        const data = {
            _status : false,
            _message : 'Something went wrong with server !',
            _error : error,
            _data : ''
        }

        return response.send(data)
    }
}