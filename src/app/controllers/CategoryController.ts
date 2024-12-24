import { Request, Response } from "express";
import { createCategory } from "../useCases/categories/CreateCategory";
import { listCategories } from "../useCases/categories/ListCategories";

export class CategoryController {
  static async list(req: Request, res: Response) {
    const categories = await listCategories();
    res.json(categories);
  }

  static async create(req: Request, res: Response) {
    const { icon, name } = req.body;
    const categories = await createCategory({ icon, name });
    res.json(categories);
  }
}
