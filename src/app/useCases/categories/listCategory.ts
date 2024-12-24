import { Request, Response } from "express";
import { Category } from "../../models/Category";

export const listCategory = async (req: Request, res: Response) => {
  const categories = await Category.find();
  res.json(categories);
}
