import * as express from "express";
import { Router, Request, Response } from "express";
import ExerciseModel from "../models/exercise.model";

const router: Router = express.Router();
router.route("/").get((req: Request, res: Response) => {
  ExerciseModel.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req: Request, res: Response) => {
  const newExercise = new ExerciseModel({
    username: req.body.username,
    description: req.body.description,
    duration: Number(req.body.duration),
    date: Date.parse(req.body.date)
  });

  newExercise
    .save()
    .then(() => res.json("Exercise added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req: Request, res: Response) => {
  ExerciseModel.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req: Request, res: Response) => {
  ExerciseModel.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req: Request, res: Response) => {
  ExerciseModel.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise
        .save()
        .then(() => res.json("Exercise updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

export default router;
