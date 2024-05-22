import express from "express";
import { orderControl } from "./order.controler";
const router = express.Router();

router.post("/", orderControl.createOrder);
router.get("/", orderControl.getOrder);

export const orderRoutes = router;
