const defaultModal = require("../../models/default")

exports.create = async(request, response) => {

    defaultModal(request.body).save()
    .then((result) => {
        const data = {
            _status : true,
            _message : 'Record Inserted',
            _data : result
        }

        return response.send(data)
    })
    .catch((error) => {
        var errorMessages = {};
        for(var i in error.errors){
            errorMessages[i] = error.errors[i].message;
        }

        const data = {
            _status : false,
            _message : 'Something went wrong !',
            _error : errorMessages,
            _data : ''
        }

        return response.send(data)
    })
}

exports.view = async(request, response) => {

    var limit = 15;
    var page = 1;

    if(request.body){
        if(request.body.limit){
            limit = request.body.limit;
        }

        if(request.body.page){
            page = request.body.page;
        }

       var skip = (page -1) * limit;
    }

    defaultModal.find().select('name order status')
    .sort({
        order : 'asc',
        _id : 'desc'
    })
    .limit(limit)
    .skip(skip)
    .then((result) => {
        if(result.length > 0){
            const data = {
                _status : true,
                _message : 'Record Found',
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
        console.log(error)
        const data = {
            _status : false,
            _message : 'Something went wrong !',
            _error : error,
            _data : []
        }

        return response.send(data)
    })
}

exports.details = async(request, response) => {

}

exports.update = async(request, response) => {

}

exports.changeStatus = async(request, response) => {

}

exports.destroy = async(request, response) => {

}