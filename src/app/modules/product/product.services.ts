import { ObjectId } from "mongodb";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const saveProductToDb = async (product: TProduct) => {
  const result = await Product.create(product);
  return result;
};

const getProductFromDb = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProductFromDb = async (id: string) => {
  const result = await Product.find({ _id: new ObjectId(id) });
  return result;
};

export const productServices = {
  saveProductToDb,
  getProductFromDb,
  getSingleProductFromDb,
};
