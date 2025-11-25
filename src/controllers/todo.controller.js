const Todo = require("../models/todo.model");

exports.createTodo = async (req, res, next) => {
  try {
    const todo = await Todo.create(req.body);

    res.status(201).json({ success: true, data: todo });
  
  } catch (error) {
    next(error);
  }
};

exports.getTodos = async (req, res, next) => {
  try {
    
    const todos = await Todo.find();

    res.json({ success: true, data: todos });

  } catch (error) {
    next(error);
  }
};

// exports.getUserById = async (req, res, next) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) return res.status(404).json({ message: "User not found" });
//     res.json({ success: true, data: user });
//   } catch (error) {
//     next(error);
//   }
// };

// exports.updateUser = async (req, res, next) => {
//   try {
//     const user = await User.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     res.json({ success: true, data: user });
//   } catch (error) {
//     next(error);
//   }
// };

// exports.deleteUser = async (req, res, next) => {
//   try {
//     await User.findByIdAndDelete(req.params.id);
//     res.json({ success: true, message: "User deleted" });
//   } catch (error) {
//     next(error);
//   }
// };
