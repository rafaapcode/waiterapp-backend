import { Request, Response } from "express";
import pino from "pino";
import { Order } from "../../models/Order";

const logger = pino();

export const deleteOrder = async (req: Request, res: Response) => {
 try {
  const {table, products} = req.body;

  if(!table || !products) {
    res.status(400).json({
      error: "Table and products are required"
    })
    return;
  }

  const order = await Order.create({table, products});

  res.status(201).json(order);
 } catch (err) {
  logger.error(err);
  res.status(500).json({
    error: "Internal server error"
  });
 }
}
