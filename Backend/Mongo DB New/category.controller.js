exports.create = async(request, response) => {
    const db = await database();
    db.collection('categories').insertOne({
        name : 'Mens',
        slug : 'mens'
    })
    .then((result) => {
        const data = {
            _status : true,
            _message : 'Record Created',
            _data : result
        }

        return response.send(data)
    })
    .catch((error) => {
        const data = {
            _status : false,
            _message : 'Something went wrong !!',
            _data : result
        }

        return response.send(data)
    })
}

exports.view = async(request, response) => {
    
}

exports.update = async(request, response) => {
    
}