"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = process.env.PORT || "5000";
app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri.toString(), { useNewUrlParser: true }).then(() => {
    console.log(`mongo DB Ready to use`);
}, err => {
    console.log(`mongo DB Connection failed: ${err}`);
});
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");
app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
//# sourceMappingURL=server.js.map