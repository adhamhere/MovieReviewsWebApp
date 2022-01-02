const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: String,
    status: String
},
{
    timestamps : true
});

const Todo = mongoose.model('Reviews', todoSchema);

module.exports = Todo;