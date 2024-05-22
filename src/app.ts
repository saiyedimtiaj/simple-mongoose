import express, { Request, Response } from "express";
import cors from "cors";
import { productRoutes } from "./app/modules/product/product.route";
import { orderRoutes } from "./app/modules/orders/order.route";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("*", async (req: Request, res: Response) => {
  res.json({
    sucess: false,
    message: "Route not found",
  });
});

export default app;
