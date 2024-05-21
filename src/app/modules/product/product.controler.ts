import { Request, Response } from "express";
import { productServices } from "./product.services";
import { ProductQuery } from "./product.interface";

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
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
    const query: ProductQuery = {};
    if (req?.query?.searchTerm) {
      query.tags = { $in: [req.query.searchTerm as string] };
    }
    const result = await productServices.getProductFromDb(query);
    res.status(200).json({
      sucess: true,
      message: "Product fetched successfully!",
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

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.getSingleProductFromDb(productId);
    res.status(200).json({
      sucess: true,
      message: "Product fetched successfully!",
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
  getSingleProduct,
};
