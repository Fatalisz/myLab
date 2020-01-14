"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const exercise_model_1 = require("../models/exercise.model");
const router = express.Router();
router.route('/').get((req, res) => {
    exercise_model_1.default.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/add').post((req, res) => {
    const newExercise = new exercise_model_1.default({
        username: req.body.username,
        description: req.body.description,
        duration: Number(req.body.duration),
        date: Date.parse(req.body.date),
    });
    newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
    exercise_model_1.default.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
    exercise_model_1.default.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
    exercise_model_1.default.findById(req.params.id)
        .then(exercise => {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);
        exercise.save()
            .then(() => res.json('Exercise updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
        .catch(err => res.status(400).json('Error: ' + err));
});
exports.default = router;
//# sourceMappingURL=exercises.js.map