import mongoose, { Schema, model, models, Document } from "mongoose";

export interface IProduct extends Document {
  productType: string;
  brand: string;
  img: string[];
  title: string;
  slug: string;
  desc: string;
  keyFeatures: string[];
  specifications: string[];
  mrp: string;
  offer: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    productType: {
      type: String,
      required: true,
    },

    brand: {
      type: String,
      required: true,
    },

    img: [
      {
        type: String,
        required: true,
      },
    ],

    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },

    desc: {
      type: String,
      required: true,
    },

    keyFeatures: [
      {
        type: String,
        required: true,
      },
    ],

    specifications: [
      {
        type: String,
        required: true,
      },
    ],

    mrp: {
      type: String,
      required: true,
    },

    offer: {
      type: String,
      required: true,
      min: 0,
      max: 100,
    },
  },
  {
    timestamps: true,
  }
);

// Validation to ensure img array has exactly 5 images
ProductSchema.path("img").validate(function (value: string[]) {
  return value.length <= 5;
}, "Product must have at most 5 images");

export default models.Product || model<IProduct>("Product", ProductSchema);
