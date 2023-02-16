import { getCategories } from './services/category-services.js';

//
async function fetchCategories() {
  const categories = await getCategories();
  this.income = categories.filter(
    (category) => category.transactions_type === 'income'
  );
  this.expense = categories.filter(
    (category) => category.transactions_type === 'expense'
  );
}

function currentCategories() {
  /*
    this --> STORE
    this.currentTab = 'expense' or 'income'
  */
  return this[this.currentTab];
}

function deleteCategory() {
  if (this.currentTab === 'expense') {
    this.expense = this.expense.filter((category) => category.id !== id);
  }
  if (this.currentTab === 'income') {
    this.expense = this.expense.filter((category) => category.id !== id);
  }
}

//
const STORE = {
  user: null,
  income: [],
  expense: [],
  currentTab: 'expense',
  fetchCategories,
  currentCategories,
  deleteCategory,
};

export default STORE;
