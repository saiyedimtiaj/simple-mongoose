import { ObjectId } from "mongodb";
import { ProductQuery, TProduct, TQueryId } from "./product.interface";
import { Product } from "./product.model";

const saveProductToDb = async (product: TProduct) => {
  const result = await Product.create(product);
  return result;
};

const getProductFromDb = async (query: ProductQuery) => {
  const result = await Product.find(query);
  return result;
};

const getSingleProductFromDb = async (id: string) => {
  const result = await Product.find({ _id: new ObjectId(id) });
  return result;
};
const deleteSingleProductFromDb = async (id: string) => {
  const result = await Product.deleteOne({ _id: new ObjectId(id) });
  return result;
};

const updateProductInDb = async (query: TQueryId, body: TProduct) => {
  const result = await Product.updateOne(query, body);
  return result;
};

export const productServices = {
  saveProductToDb,
  getProductFromDb,
  getSingleProductFromDb,
  deleteSingleProductFromDb,
  updateProductInDb,
};
