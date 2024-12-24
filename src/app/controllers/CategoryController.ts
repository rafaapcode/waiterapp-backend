import { Request, Response } from "express";
import { CategoryUseCases } from "../useCases/categories/CategoryUseCases";

export class CategoryController {
  constructor(private categoryRepo: CategoryUseCases){}

  async list(req: Request, res: Response) {
    const categories = await this.categoryRepo.listCategory();
    res.json(categories);
  }

  async create(req: Request, res: Response) {
    const { icon, name } = req.body;
    const categories = await this.categoryRepo.createCategory({ icon, name });
    res.json(categories);
  }
}
