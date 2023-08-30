const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1/todo');

const Schema = mongoose.Schema;


const todoSchema = new Schema({
  todoname: {type: String, required: true},
  taskstatus: Boolean
});

const todo = mongoose.model("Todo", todoSchema);

module.exports = todo;