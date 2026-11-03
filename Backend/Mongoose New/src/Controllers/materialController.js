const materialModal = require("../Models/Material");
const slugify = require('slugify')

const generateUniqueSlug = async (Model, baseSlug) => {
    let slug = baseSlug;
    let count = 0;

    // Loop to find unique slug
    while (await Model.findOne({ 
        slug : slug,
        deleted_at : null
     })) {
        count++;
        slug = `${baseSlug}-${count}`;
    }

    return slug;
};

exports.create = async(request, response) => {

    var saveData = request.body;

    if (request.body?.name) {
        var slug = slugify(request.body?.name, {
            lower: true,
            strict: true
        })

        saveData.slug = await generateUniqueSlug(materialModal, slug)
    }

    materialModal(saveData).save()
        .then((result) => {
            const data = {
                _status: true,
                _message: 'Record Inserted',
                _data: result
            }

            return response.send(data);
        })
        .catch((error) => {

            const errorMessages = {};

            for(let i in error.errors){
                errorMessages[i] = error.errors[i].message
            }

            const data = {
                _status: false,
                _message: 'Something went wrong with the server.',
                _error: errorMessages,
                _data: null
            }

            return response.send(data);
        })
}

exports.view = (request, response) => {

    // // For Website
    // var condition = {
    //     deleted_at : null,
    //     status : true    
    // };

    // // For Website
    var sorting = {
        order : 'asc',
        _id : 'desc'
    }

    if(request.body?.sorting == 1){
        var sorting = {
            name : 'asc',
        }
    }

    if(request.body?.sorting == 2){
        var sorting = {
            name : 'desc',
        }
    }

    if(request.body?.sorting == 3){
        var sorting = {
            order : 'asc',
        }
    }

    if(request.body?.sorting == 4){
        var sorting = {
            order : 'desc',
        }
    }

    // For Admin
    var condition = {
        deleted_at : null,
    };

    // For Admin
    // var sorting = {
    //     _id : 'desc'
    // }

    // if (request.body?.slug) {
    //     condition['slug'] = request.body.slug;
    // }

    // console.log(condition);

    materialModal.find(condition).select('name slug status order').sort(sorting)
        .then((result) => {
            if (result.length > 0) {
                const data = {
                    _status: true,
                    _message: 'Record Found',
                    _data: result
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
        })
        .catch((error) => {
            const data = {
                _status: false,
                _message: 'Something went wrong with the server.',
                _error: error,
                _data: []
            }

            return response.send(data);
        })

}