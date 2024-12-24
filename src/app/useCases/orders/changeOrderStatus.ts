import { Request, Response } from "express";
import pino from "pino";
import { Order } from "../../models/Order";

const logger = pino();

export const changeStatusOrder = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    if (!orderId) {
      res.status(400).json({
        error: "Order ID is required",
      });
      return;
    }

    if(!status) {
      res.status(400).json({
        error: "Status is required"
      });
      return;
    }

    if(!["WAITING","IN_PRODUCTION","DONE"].includes(status)) {
      res.status(400).json({
        error: "Invalid status"
      });
      return;
    }

    const order = await Order.findByIdAndUpdate(orderId, {status}, {new: true});

    res.status(201).json(order);
  } catch (err) {
    logger.error(err);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};
