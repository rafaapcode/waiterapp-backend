export interface IRepository {
  create<T>(data: T): Promise<unknown>;
  list(): Promise<unknown[]>;
  update<T>(data: Partial<T>, id: string): Promise<unknown>;
  listOne<F>(filter: F): Promise<unknown>;
  listMany<F>(filter: F): Promise<unknown[]>;
  delete<F>(id: F): Promise<unknown>;
};
