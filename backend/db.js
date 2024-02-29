const mongoose = require("mongoose");
const { title } = require("process");

mongoose.connect(
  "mongodb+srv://aryanpachori03:SOBtBhiyY84juLGR@cluster0.i7mnhcy.mongodb.net/todo"
);

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", TodoSchema);

module.exports = {
    todo
}
