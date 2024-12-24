import { Request, Response } from "express";
import pino from "pino";
import { Product } from "../../models/Product";

const logger = pino();

export const listProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
