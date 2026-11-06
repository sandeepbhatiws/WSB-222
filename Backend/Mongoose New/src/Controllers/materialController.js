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

exports.view = async(request, response) => {

    var sorting = {
        _id : 'desc'
    }

    var limit = 15;
    var page = 1;
    var skip = 0;

    if(request.body?.page){
        page = request.body?.page;
    }

    if(request.body?.limit){
        limit = request.body?.limit;
    }

    skip = (page - 1) * limit;
    
    var condition = {};
    var andCondition = [];
    var orCondition = [];

    if(request.body?.name){
        // var nameRegex = new RegExp("^" + request.body.name);
        var nameRegex = new RegExp(request.body.name, "i");
        name = {
            name : nameRegex
        }
        andCondition.push(name);
    }

    if(request.body?.order){
        order = {
            order : request.body?.order
        }
        andCondition.push(order)
    }

    if(request.body?.status){
        status = {
            status : request.body?.status
        }
        andCondition.push(status)
    }

    // status = {
    //     name : {
    //         $exists : false
    //     }
    // }

    type = {
        name : {
            $type : 2
        }
    }

    andCondition.push(type)

    if(andCondition.length > 0){
        condition.$and = andCondition
    }

    if(orCondition.length > 0){
        condition.$or = orCondition
    }

    console.log(andCondition)
    console.log(orCondition)
    console.log(condition)

    var totalRecords = await materialModal.find(condition).countDocuments();

    materialModal.find(condition, 'name slug status order')
    // .select('name slug status order')
    .sort(sorting)
    .limit(limit).skip(skip)
    .then((result) => {
        if (result.length > 0) {
            const data = {
                _status: true,
                _message: 'Record Found',
                _paginate : {
                    current_page : page,
                    total_pages : Math.ceil(totalRecords / limit),
                    total_records : totalRecords
                },
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

// exports.view = async(request, response) => {

//     // // For Website
//     // var condition = {
//     //     deleted_at : null,
//     //     status : true    
//     // };

//     // // For Website
//     var sorting = {
//         order : 'asc',
//         _id : 'desc'
//     }

//     if(request.body?.sorting == 1){
//         var sorting = {
//             name : 'asc',
//         }
//     }

//     if(request.body?.sorting == 2){
//         var sorting = {
//             name : 'desc',
//         }
//     }

//     if(request.body?.sorting == 3){
//         var sorting = {
//             order : 'asc',
//         }
//     }

//     if(request.body?.sorting == 4){
//         var sorting = {
//             order : 'desc',
//         }
//     }

//     // For Admin
//     // var condition = {
//     //     deleted_at : null,
//     // };

//     var limit = 15;
//     var page = 1;
//     var skip = 0;

//     if(request.body?.page){
//         page = request.body?.page;
//     }

//     if(request.body?.limit){
//         limit = request.body?.limit;
//     }

//     skip = (page - 1) * limit;

//     // For Admin
//     // var sorting = {
//     //     _id : 'desc'
//     // }

//     // if (request.body?.name) {
//     //     condition['name'] = request.body.name;
//     // }

//     // if (request.body?.order) {
//     //     condition['order'] = {
//     //         $gte : request.body.order
//     //     };
//     // }

//     // condition['status'] = {
//     //     $lt : 1
//     // }

//     // var condition = {};

//     // var filter = [];

//     // if(request.body?.order){
//     //     filter['order'] = {
//     //         $gte : request.body?.order
//     //     }
//     // }

//     // if(request.body?.status){
//     //     filter['status'] = request.body?.status
//     // }

//     // console.log(filter.length);

//     // if(filter.length > 0){
//     //     condition['$or'] = filter;
//     // }

//     // console.log(filter);

//     // console.log(condition);

//     // var condition = { $or: [ { order: { $gte: 6 } }, { status: 0 } ] };


//     // var condition = {};

//     // if(request.body?.order){
//     //     condition['order'] = {
//     //         $gte : request.body?.order
//     //     };

//     //     condition.status = 1;
//     // }

//     var condition = {
//         $and : [
//             {
//                 order : {
//                     $gte : 5
//                 }
//             },
//             {
//                 status : 0
//             }
//         ]
//     }

//     console.log(condition);

//     // var totalRecords = await materialModal.find(condition);
//     var totalRecords = await materialModal.find(condition).countDocuments();

//     materialModal.find(condition).select('name slug status order').sort(sorting)
//     .limit(limit).skip(skip)
//         .then((result) => {
//             if (result.length > 0) {
//                 const data = {
//                     _status: true,
//                     _message: 'Record Found',
//                     _paginate : {
//                         current_page : page,
//                         total_pages : Math.ceil(totalRecords / limit),
//                         total_records : totalRecords
//                     },
//                     _data: result
//                 }

//                 return response.send(data);
//             } else {
//                 const data = {
//                     _status: false,
//                     _message: 'No Record Found',
//                     _data: []
//                 }

//                 return response.send(data);
//             }
//         })
//         .catch((error) => {
//             const data = {
//                 _status: false,
//                 _message: 'Something went wrong with the server.',
//                 _error: error,
//                 _data: []
//             }

//             return response.send(data);
//         })

// }