import { IRepository } from "../../../types/Repo.type";

export class FakeDbCategory implements IRepository {
  private categories: unknown[] = [];

  async create<T>(data: T): Promise<unknown> {
    this.categories.push(data);
    return data;
  }
  async list(): Promise<unknown[]> {
    return this.categories;
  }

  update<T>(data: Partial<T>, id: string): Promise<unknown> {
    console.log(data, id);
    throw new Error("Method not implemented.");
  }
  listOne<F>(filter: F): Promise<unknown> {
    console.log(filter);
    throw new Error("Method not implemented.");
  }
  listMany<F>(filter: F): Promise<unknown[]> {
    console.log(filter);
    throw new Error("Method not implemented.");
  }
  delete<F>(id: F): Promise<unknown> {
    console.log(id);
    throw new Error("Method not implemented.");
  }
}
