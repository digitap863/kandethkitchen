import mongoose, { Schema, model, models, Document } from "mongoose";

export interface IProductType extends Document {
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProductTypeSchema = new Schema<IProductType>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export default models.ProductType || model<IProductType>("ProductType", ProductTypeSchema);
