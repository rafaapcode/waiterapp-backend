import { IRepository } from "../../types/Repo.type";

export class CategoryUseCases {
  constructor(private readonly categoryRepo: IRepository) {}

  async listCategory() {
    return "teste";
  }

  async createCategory() {
    return "teste";
  }
}
