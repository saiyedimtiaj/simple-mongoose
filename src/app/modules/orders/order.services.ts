import { Order } from "./order.model";
import { TOrderQuery, TOrders } from "./orders.interface";

const saveOrderToDb = async (order: TOrders) => {
  const result = await Order.create(order);
  return result;
};

const getOrderFromDb = async (query: TOrderQuery) => {
  const result = await Order.find(query);
  return result;
};

export const orderServices = {
  saveOrderToDb,
  getOrderFromDb,
};
