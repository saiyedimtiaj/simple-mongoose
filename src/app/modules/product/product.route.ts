import express from "express";
import { productControl } from "./product.controler";
const router = express.Router();

router.post("/", productControl.createProduct);
router.get("/", productControl.getAllProduct);
router.get("/:productId", productControl.getSingleProduct);
router.delete("/:productId", productControl.deleteProduct);
router.put("/:productId", productControl.updateProduct);

export const productRoutes = router;
