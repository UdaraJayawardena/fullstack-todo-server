const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const errorHandler = require("./middleware/error.middleware");

const userRoutes = require("./routes/user.routes");
const todoRoutes = require("./routes/todo.routes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

app.get("/api", (req, res) => {
  res.json({ Development: "Server is Running" });
});

app.use("/api/users", userRoutes);

app.use("/api/todos", todoRoutes);

app.use(errorHandler);

module.exports = app;
