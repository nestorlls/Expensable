import { getCategories } from './services/category-services.js';

//
async function fetchCategories() {
  const categories = await getCategories();
  this.categories = categories;
}
//
const STORE = {
  user: null,
  categories: [],
  fetchCategories,
};

export default STORE;
