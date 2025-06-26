import { Category } from '../db/models/category.js';

export const getAllCategories = async () => {
  const categories = await Category.find({}, '_id name');
  return categories;
};
