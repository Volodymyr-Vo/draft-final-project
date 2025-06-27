import { Category } from '../db/models/category.js';

export const getAllCategories = async () => {
  const categories = await Category.find(); // Без обмежень
  return categories;
};

export const createCategory = async (data) => {
  const category = await Category.create(data);
  return category;
};
