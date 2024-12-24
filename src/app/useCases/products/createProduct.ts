import { Request, Response } from "express";
import pino from "pino";
import { Product } from "../../models/Product";

const logger = pino();

export const createProduct = async (req: Request, res: Response) => {
 try {
  const {icon, name} = req.body;
  const product = await Product.create({icon, name});

  res.status(201).json(product);
 } catch (err) {
  logger.error(err);
  res.status(500).json({
    error: "Internal server error"
  });
 }
}
