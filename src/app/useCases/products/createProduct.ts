import { Request, Response } from "express";
import pino from "pino";

const logger = pino();

export const createProduct = async (req: Request, res: Response) => {
 try {
  // const product = await Product.create({icon, name});
  console.log(req.body);
  res.sendStatus(201)
 } catch (err) {
  logger.error(err);
  res.status(500).json({
    error: "Internal server error"
  });
 }
}
