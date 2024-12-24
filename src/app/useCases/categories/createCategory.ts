import { Request, Response } from "express";
import { Category } from "../../models/Category";

export const createCategory = async (req: Request, res: Response) => {
  const {icon, name} = req.body;
  const categorie = await Category.create({icon, name});

  res.json(categorie);
}
