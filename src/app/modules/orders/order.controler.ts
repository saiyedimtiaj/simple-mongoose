import { Request, Response } from "express";
import { orderServices } from "./order.services";
import ordersValidationSchema from "./order.validation";
import { TOrderQuery } from "./orders.interface";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const { error, value } = ordersValidationSchema.validate(order);
    if (error) {
      res.status(500).json({
        sucess: false,
        message: "something went wrong",
        error: error,
      });
    }
    const result = await orderServices.saveOrderToDb(value);
    res.status(200).json({
      sucess: true,
      message: "Order data get sucessfully",
      date: result,
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      message: "something went wrong",
      error: err,
    });
  }
};

const getOrder = async (req: Request, res: Response) => {
  try {
    const query: TOrderQuery = {};
    if (req?.query?.email) {
      query.email = req?.query?.email as string;
    }
    const result = await orderServices.getOrderFromDb(query);
    res.status(200).json({
      sucess: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      message: "something went wrong",
      error: err,
    });
  }
};

export const orderControl = {
  createOrder,
  getOrder,
};
