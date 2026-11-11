const { generateUniqueSlug } = require("../../Config/CommonFunctions");
const materialModal = require("../../Models/Material")
var slugify = require('slugify');

exports.create = async(request, response) => {

    try {
        const dataSave = request.body;

        if(request.body?.name){
            var slug = slugify(request.body?.name, {
                lower: true,
                strict: true,
            });
            dataSave.slug = await generateUniqueSlug(materialModal, slug);
        }

        materialModal(dataSave).save()
        .then((result) => {
            const data = {
                _status : true,
                _message : 'Record Inserted !',
                _data : result
            }

            return response.send(data)
        })
        .catch((error) => {

            const errorMessages = {};

            for(var i in error.errors){
                errorMessages[i] = error.errors[i].message
            }

            const data = {
                _status : false,
                _message : 'Something went wrong !',
                _error : errorMessages,
                _data : null
            }

            return response.send(data)
        })
    } catch (error) {
        const data = {
            _status : false,
            _message : 'Something went wrong with server !',
            _error : error,
            _data : null
        }

        return response.send(data)
    }
}

exports.view = async(request, response) => {

    var page = 1;
    var limit = 15;
    var skip = 0

    if(request.body?.limit){
        limit = request.body?.limit;
    }

    if(request.body?.page){
        page = request.body?.page;
        skip = (page - 1) * limit;
    }

    var andCondition = [
        {
            deleted_at : null
        }
    ]

    var orCondition = [];

    if(request.body?.name){
        var name = new RegExp(request.body.name,"i");
        orCondition.push({ name : name })
    }

    if(andCondition.length > 0){
        var filter = { $and : andCondition }
    } else {
        var filter = {}
    }

    if(orCondition.length > 0){
        filter.$or = orCondition;
    }

    var totalRecords = await materialModal.find(filter).countDocuments();

    try {
        materialModal.find(filter)
        .select('name slug order status')
        .limit(limit).skip(skip)
        .sort({
            _id : 'desc'
        })
        .then((result) => {
            if(result.length > 0){
                const data = {
                    _status : true,
                    _message : 'Record Found !',
                    _paginate : {
                        current_page : page,
                        total_pages : Math.ceil(totalRecords/limit),
                        total_records : totalRecords
                    },
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

            const errorMessages = {};

            for(var i in error.errors){
                errorMessages[i] = error.errors[i].message
            }

            const data = {
                _status : false,
                _message : 'Something went wrong !',
                _error : errorMessages,
                _data : []
            }

            return response.send(data)
        })
    } catch (error) {
        const data = {
            _status : false,
            _message : 'Something went wrong with server !',
            _error : error,
            _data : []
        }

        return response.send(data)
    }
}

exports.details = async(request, response) => {

}

exports.update = async(request, response) => {

}

exports.changeStatus = async(request, response) => {

}

exports.destroy = async(request, response) => {

}