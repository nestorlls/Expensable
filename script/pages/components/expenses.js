import { deleteCategory } from '../../services/category-services.js';
import STORE from '../../store.js';

function calcTotal() {
  // let total = 0;
  // transactions.forEach((transaction) => {
  //   total += transaction.amount;
  // });
  // return total;
  return transactions.reduce(
    (total, transaction) => total + transaction.amount,
    0
  );
}

function renderCategory(category) {
  return `<li>
          <p>${category.name}</p><p>${calcTotal(category.transactions)}</p>
          <a href="#" data-id =${category.id}>Delete</a>
        </li>`;
}

function listenDelete() {
  const ul = document.querySelector('.js-category-list');
  ul.addEventListener('click', async (event) => {
    const deleteLink = event.target.closest('[data-id]');
    if (!deleteLink) return;

    try {
      event.preventDefault();
      const id = deleteLink.dataset.id;
      await deleteCategory(id); // elimina en al API
      // eliminar la categoria del STORE
      STORE.deleteCategory(id);
    } catch (error) {
      console.log(error);
    }
  });
}
function render() {
  const categories = STORE.currentCategories();
  console.log(categories);
  return `
    <h2>${STORE.currentTab === 'expense' ? 'Expenses' : 'Income'}</h2>
    <ul class="js-category-list">
      ${categories.map(renderCategory).join('')}
    </ul>
  `;
}
const Expenses = {
  toString() {
    return render();
  },
  addListeners() {
    listenDelete();
  },
};
export default Expenses;
