"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const exerciseSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true }
}, {
    timestamps: true
});
exports.default = mongoose.model("Exercise", exerciseSchema);
//# sourceMappingURL=exercise.model.js.map