const express = require("express");
const cors = require("cors");

require("./config/dbConnect");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/todos", require("./router/todoRouter"));

app.listen(4000, () => console.log("server up and running"));
