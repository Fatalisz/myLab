import * as mongoose from "mongoose";
import { Schema, Document } from "mongoose";

export interface IExercise extends Document {
  username: string;
  description: string;
  duration: number;
  date: number;
}

const exerciseSchema = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true }
  },
  {
    timestamps: true
  }
);

export default mongoose.model<IExercise>("Exercise", exerciseSchema);
