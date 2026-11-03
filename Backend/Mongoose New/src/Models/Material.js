const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type :  String,
        match: /^[a-zA-Z0-9 ]{2,15}$/,
        required : [true, 'Name is required'],
        validate: {
            validator: async function(v) {
                const name = await this.constructor.findOne({ name: v, deleted_at : null });
                return !name;
            },
            message: `The specified name is already in use.`
        }
    },
    slug : {
        type :  String,
        required : [true, 'Slug is required']
    },
    order : {
        type : Number,
        default : 0
    },
    status : {
        type : Boolean,
        default : 1
    },
    created_at : {
        type : Date,
        default : Date.now()
    },
    updated_at : {
        type : Date,
        default : Date.now()
    },
    deleted_at : {
        type : Date,
        default : null
    }
});

var materialModal = mongoose.model('materials', schema);

module.exports = materialModal;