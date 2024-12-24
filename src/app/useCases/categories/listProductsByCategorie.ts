import { Request, Response } from "express";
import pino from "pino";
import { Product } from "../../models/Product";

const logger = pino();

export const listProductByCategorie = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;
    const products = await Product.find().where("category").equals(categoryId);
    res.json(products);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
