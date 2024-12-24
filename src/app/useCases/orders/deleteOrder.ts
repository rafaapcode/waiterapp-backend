import { Request, Response } from "express";
import pino from "pino";
import { Order } from "../../models/Order";

const logger = pino();

export const deleteOrder = async (req: Request, res: Response) => {
 try {
  const {orderId} = req.params;

  if(!orderId) {
    res.status(400).json({
      error: "Order ID is required"
    })
    return;
  }

  await Order.findByIdAndDelete(orderId);

  res.sendStatus(204);
 } catch (err) {
  logger.error(err);
  res.status(500).json({
    error: "Internal server error"
  });
 }
}
