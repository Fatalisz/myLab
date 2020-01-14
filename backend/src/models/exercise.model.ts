import mongoose, {Schema, Document} from 'mongoose'

export interface IExercise extends Document {
    username: String;
    description: String;
    duration: Number;
    date: Date;
}

const exerciseSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

module.exports = mongoose.model<IExercise>('Exercise', exerciseSchema);