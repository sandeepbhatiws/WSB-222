const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Name is required'],
        // minLength : 4,
        // maxLength : 15,
        match: /^[!a-zA-Z 0-9@]{2,12}$/,
        validate: {
        validator: async function(v) {
                const user = await this.constructor.findOne({ name : v, deleted_at : null });
                return !user;
            },
            message: `The specified name is already in use.`
        }
    },
    order : {
        type : Number,
        min : [1, 'Minimum value must be 1 or less than 1000.'],
        max : [1000, 'Maximum value must be less than or equal to 1000.'],
        // enum : [1,2,3,4,5,6],
        default : 1
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

const defaultModal = mongoose.model('defaults', schema);

module.exports = defaultModal;