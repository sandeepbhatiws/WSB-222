const validation = (request, response, next) => {

    if(!request.body){
        const data = {
            _status : false,
            _message : 'Required fields missing !',
            _data : null
        }

        return response.send(data);
    }

    if(request.body.username == '' || request.body.password == ''){
        const data = {
            _status : false,
            _message : 'Empty value is not allowed !',
            _data : null
        }

        return response.send(data);
    }

    if(request.body.username != 'admin' || request.body.password != 123456){
        const data = {
            _status : false,
            _message : 'Username or password is invalid !',
            _data : null
        }

        return response.send(data);
    }

    next();
}

module.exports = { validation }