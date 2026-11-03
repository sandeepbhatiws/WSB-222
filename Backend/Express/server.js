const express = require('express');
const { categories, products } = require('./data');
const { validation } = require('./middleware');

// To Make it Executable
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }))


server.get('/', (request, response) => {
    response.end('Server is working Fine.')
});



server.post('/categories', validation, (request, response) => {

    if (categories.length > 0) {
        const data = {
            _status: true,
            _message: 'Record Fetch',
            _data: categories
        }

        return response.send(data);
    } else {
        const data = {
            _status: false,
            _message: 'No Record Found',
            _data: []
        }

        return response.send(data);
    }
});

server.post('/products', (request, response) => {

    if (products.length > 0) {
        const data = {
            _status: true,
            _message: 'Record Fetch',
            _data: products
        }

        return response.send(data);
    } else {
        const data = {
            _status: false,
            _message: 'No Record Found',
            _data: []
        }

        return response.send(data);
    }
});

server.post('/product-details', (request, response) => {

    try {
        console.log(request.body);

        var productDetails = products.filter((v) => {
            if (request.body.id == v.id) {
                return v;
            }
        })

        if (productDetails.length > 0) {
            const data = {
                _status: true,
                _message: 'Record Fetch',
                _data: productDetails[0]
            }

            return response.send(data);
        } else {
            const data = {
                _status: false,
                _message: 'No Record Found',
                _data: null
            }

            return response.send(data);
        }
    } catch (error) {
        const data = {
            _status: false,
            _message: 'Something is went wrong with server.',
            _data: null
        }

        return response.send(data);
    }

    // console.log(request.params);

});


server.listen(5000, () => {
    console.log('Server is working Fine.')
})