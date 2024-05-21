import express from "express";
import { productControl } from "./product.controler";
const router = express.Router();

router.post("/", productControl.createProduct);
router.get("/", productControl.getAllProduct);
router.get("/:productId", productControl.getSingleProduct);
router.delete("/:productId", productControl.deleteProduct);

export const productRoutes = router;
