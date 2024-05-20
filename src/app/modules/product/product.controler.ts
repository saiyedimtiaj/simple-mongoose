import { Request, Response } from "express";
import { productServices } from "./product.services";

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    console.log(product);
    const result = await productServices.saveProductToDb(product);
    res.status(200).json({
      sucess: true,
      message: "product create sucessfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      message: "Something went wrong",
      error: err,
    });
  }
};

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getProductFromDb();
    res.status(200).json({
      sucess: true,
      message: "product find sucessfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      message: "Something went wrong while finding",
      error: err,
    });
  }
};

export const productControl = {
  createProduct,
  getAllProduct,
};
