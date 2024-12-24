import { Request, Response } from "express";
import pino from "pino";
import { Product } from "../../models/Product";

const logger = pino();

export const createProduct = async (req: Request, res: Response) => {
 try {
  const imagePath = req.file?.filename;
  const { name, description, price, category, ingredients } = req.body;

  if (!name || !description || !price || !category || !ingredients || !imagePath) {
    res.status(400).json({
      error: "Missing required fields"
    });
    return;
  }

  if (!imagePath) {
    res.status(400).json({
      error: "Missing image"
    });
    return;
  }

  const product = await Product.create({
    name,
    description,
    price: Number(price),
    category,
    ingredients: ingredients ? JSON.parse(ingredients) : [],
    imagePath
  });

  res.status(201).json(product);
 } catch (err) {
  logger.error(err);
  res.status(500).json({
    error: "Internal server error"
  });
 }
}
