"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const user_model_1 = require("../models/user.model");
const router = express.Router();
router.route("/").get((req, res) => {
    user_model_1.default.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json("Error: " + err));
});
router.route("/add").post((req, res) => {
    const username = req.body.username;
    const newUser = new user_model_1.default({
        username: username
    });
    newUser
        .save()
        .then(() => res.json("User added!"))
        .catch(err => res.status(400).json("Error: " + err));
});
exports.default = router;
//# sourceMappingURL=users.js.map