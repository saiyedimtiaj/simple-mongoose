import { Order } from "./order.model";
import { TOrders } from "./orders.interface";

const saveOrderToDb = async (order: TOrders) => {
  const result = await Order.create(order);
  return result;
};

export const orderServices = {
  saveOrderToDb,
};
