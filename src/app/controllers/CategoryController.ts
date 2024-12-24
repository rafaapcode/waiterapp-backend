import { Request, Response } from "express";
import { CategoryRepository } from "../repository/CategoryRepo";

export class CategoryController {
  constructor(private categoryRepo: CategoryRepository){}

  async list(req: Request, res: Response) {
    const categories = await this.categoryRepo.list();
    res.json(categories);
  }

  async create(req: Request, res: Response) {
    const { icon, name } = req.body;
    const categories = await this.categoryRepo.create({ icon, name });
    res.json(categories);
  }
}
