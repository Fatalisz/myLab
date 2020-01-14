import * as express from "express";
import { Router, Request, Response } from "express";
import UserModel from "../models/user.model";

const router: Router = express.Router();
router.route("/").get((req: Request, res: Response) => {
    UserModel.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req: Request, res: Response) => {
    const username: string = req.body.username;
    const newUser = new UserModel({
        username: username
    });

    newUser
        .save()
        .then(() => res.json("User added!"))
        .catch(err => res.status(400).json("Error: " + err));
});

export default router;
