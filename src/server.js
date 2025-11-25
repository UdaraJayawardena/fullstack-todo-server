require("dotenv").config();

const connectDB = require("./config/db");

const app = require("./app");

connectDB();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server Running on Port ${port}`));
