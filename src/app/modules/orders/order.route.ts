import express from "express";
import { orderControl } from "./order.controler";
const router = express.Router();

router.post("/", orderControl.createOrder);

export const orderRoutes = router;
