import { Category } from "../../models/Category";

export const createCategory = async (category: {name: string; icon: string;}) => {
  const newCategory = await Category.create(category);
  return newCategory;
};
