const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
    done: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", todoSchema);
