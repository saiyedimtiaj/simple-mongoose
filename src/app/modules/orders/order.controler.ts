import { Request, Response } from "express";
import { orderServices } from "./order.services";
import ordersValidationSchema from "./order.validation";

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

export const orderControl = {
  createOrder,
};
