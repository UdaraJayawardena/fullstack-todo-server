const Todo = require("../models/todo.model");

// Create Todo
exports.createTodo = async (req, res, next) => {
  try {
    const todo = await Todo.create(req.body);

    res.status(201).json({ success: true, data: todo });
  } catch (error) {
    next(error);
  }
};

// Get All Todos
exports.getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find({ deleted: false });

    res.json({ success: true, data: todos });
  } catch (error) {
    next(error);
  }
};

// Updated Todo
exports.updateTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json({ success: true, data: todo });
  } catch (error) {
    next(error);
  }
};

// Change Todo Status
exports.updateTodoStatus = async (req, res, next) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findById(id);
    if (!todo) {
      return res
        .status(404)
        .json({ success: false, message: "Todo not found" });
    }

    todo.done = !todo.done;
    await todo.save();

    res.json({ success: true, data: todo });
  } catch (err) {
    next(err);
  }
};

// Delete a Todo
exports.deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { deleted: true },
      { new: true }
    );

    res.json({ success: true, data: todo });
  } catch (error) {
    next(error);
  }
};
