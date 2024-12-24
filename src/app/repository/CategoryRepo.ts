import { Category } from "../models/Category";
import { IRepository } from "../types/Repo.type";

export class CategoryRepository implements Partial<IRepository> {
  async create<T>(data: T): Promise<unknown> {
    const categorie = await Category.create(data);
    return categorie;
  }
  async list(): Promise<unknown[]> {
    const categories = await Category.find();
    return categories;
  }
}
