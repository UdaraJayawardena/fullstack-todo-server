const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo.controller");

router.post("/", todoController.createTodo);

router.get("/", todoController.getTodos);

// router.get("/:id", userController.getUserById);

// router.put("/:id", userController.updateUser);

// router.delete("/:id", userController.deleteUser);

module.exports = router;
