import { Category } from "../../models/Category";

export const listCategories = async () => {
  const categories = await Category.find();

  return categories;
};
