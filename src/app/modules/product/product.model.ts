import { Schema, model } from "mongoose";
import { TInventory, TProduct, TVariants } from "./product.interface";

const productVariantsSchema = new Schema<TVariants>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const productInventorySchema = new Schema<TInventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

const productSchema = new Schema<TProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [productVariantsSchema], required: true },
  inventory: { type: productInventorySchema, required: true },
});

export const Product = model<TProduct>("Product", productSchema);
