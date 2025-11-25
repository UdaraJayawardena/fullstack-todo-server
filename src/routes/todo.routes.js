const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo.controller");

router.post("/", todoController.createTodo);

router.get("/", todoController.getTodos);

router.put("/:id", todoController.updateTodo);

router.patch("/:id/delete", todoController.deleteTodo);

router.patch("/:id/done", todoController.updateTodoStatus);


module.exports = router;
