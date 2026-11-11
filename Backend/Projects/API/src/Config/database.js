const mongoose = require('mongoose');

const database = mongoose.connect(`${process.env.Connection_URL}${process.env.database_name}`).then(() => console.log('Connected!'));

module.exports = database;