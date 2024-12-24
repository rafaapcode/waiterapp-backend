import { Request, Response } from "express";
import pino from "pino";
import { Order } from "../../models/Order";

const logger = pino();

export const listOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 }).populate('products.product');
    res.json(orders);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
