const http = require('http');
const { categories } = require('./data');

http.createServer((request, response) => {

    console.log(request.url);
    console.log(request.method);

    if(request.url == '/'){
        response.end('Server is working fine.')
    } else if(request.url == '/categories' && request.method == 'POST'){

        if(categories.length > 0){
            const data = {
                _status : true,
                _message : 'Record found !',
                _data : categories
            }

            response.end(JSON.stringify(data));
        } else {
            const data = {
                _status : false,
                _message : 'No Record found !',
                _data : []
            }

            response.end(JSON.stringify(data));
        }
    } else {
        response.end('No API found')
    }

}).listen(5000, () => {
    console.log('Server is working fine.')
})