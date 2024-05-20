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

export const productServices = {
  saveProductToDb,
  getProductFromDb,
};
