import mongoose, { Schema, model, models, Document } from "mongoose";

export interface IBrand extends Document {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const BrandSchema = new Schema<IBrand>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Brand || model<IBrand>("Brand", BrandSchema);
