import * as mongoose from "mongoose";
import { Schema, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
}

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model<IUser>("User", userSchema);
