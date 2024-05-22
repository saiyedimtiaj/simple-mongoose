import { ObjectId } from "mongodb";

export interface TVariants {
  type: string;
  value: string;
}

export interface TInventory {
  quantity: number;
  inStock: boolean;
}

export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TVariants[];
  inventory: TInventory;
};

export interface ProductQuery {
  tags?: { $in: string[] };
}

export interface TQueryId {
  _id: ObjectId;
}
