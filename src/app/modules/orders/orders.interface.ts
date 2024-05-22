export type TOrders = {
  email: string;
  productId: string;
  price: number;
  quantity: number;
};

export interface TOrderQuery {
  email?: string;
}
