import mongoose, { Schema, Document } from 'mongoose';

const exerciseSchema: Schema = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

export interface IExercise extends Document {
    username: String;
    description: String;
    duration: Number; 
    date: Date;
}

module.exports = mongoose.model<IExercise>('Exercise', exerciseSchema);