import { Request, Response } from "express";
import { productServices } from "./product.services";
import { ProductQuery } from "./product.interface";
import productValidationSchema from "./product.validation";

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const { error, value } = productValidationSchema.validate(product);
    if (error) {
      res.status(500).json({
        sucess: false,
        message: "something went wrong",
        err: error,
      });
    }
    const result = await productServices.saveProductToDb(value);
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
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.deleteSingleProductFromDb(productId);
    res.status(200).json({
      sucess: true,
      message: "Product deleted successfully!",
      data: null,
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
  deleteProduct,
};
