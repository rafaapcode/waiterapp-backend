import { Request, Response } from "express";
import pino from "pino";
import { Category } from "../../models/Category";

const logger = pino();

export const createCategory = async (req: Request, res: Response) => {
 try {
  const {icon, name} = req.body;

  if(!name) {
    res.status(400).json({
      error: "Name is required"
    });
  }

  if(!icon) {
    res.status(400).json({
      error: "Name is required"
    });
  }

  const categorie = await Category.create({icon, name});

  res.status(201).json(categorie);
 } catch (err) {
  logger.error(err);
  res.status(500).json({
    error: "Internal server error"
  });
 }
}
