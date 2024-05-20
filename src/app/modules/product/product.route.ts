import express from "express";
import { productControl } from "./product.controler";
const router = express.Router();

router.post("/", productControl.createProduct);
router.get("/", productControl.getAllProduct);

export const productRoutes = router;
