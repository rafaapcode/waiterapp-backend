import { IRepository } from "../../types/Repo.type";

export class CategoryUseCases {
  constructor(private readonly categoryRepo: IRepository) {}

  async listCategory() {
    const categories = await this.categoryRepo.list();
    return categories;
  }

  async createCategory(data: {name: string; icon: string}) {
    const regex = /https?:\/\//;
    if(data.name.length < 3 || !regex.test(data.icon)) {
      return  {error: true, message: "Invalid data"};
    }
    const newCategory = await this.categoryRepo.create<{name: string; icon: string}>(data);
    return newCategory;
  }
}
