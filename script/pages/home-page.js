// imports
import DOMHandler from '../dom-handler.js';
import STORE from '../store.js';

function render() {
  const currentTab = STORE.currentTab;
  return `
    <main class="section">
      <section class="container">
        <h1 class="heading heading--lg text-center mb-2">Expensable</h1>
        <div class="flex justify-between mb-8 js-navigation">
          <a href="#" class="button button--subtle ${
            currentTab === 'expense' ? 'activeTab' : ''
          }" data-tab="expense">Expense</a>
          <a href="#" class="button button--subtle ${
            currentTab === 'income' ? 'activeTab' : ''
          }" data-tab="income">Income</a>
          <a href="#" class="button button--subtle ${
            currentTab === 'profile' ? 'activeTab' : ''
          }" data-tab="profile">Profile</a>
        </div>
      </section>
    </main>
  `;
}

function listenNavigation() {
  const navigation = document.querySelector('.js-navigation');
  navigation.addEventListener('click', (event) => {
    event.preventDefault();
    const link = event.target.closest('[data-tab]');
    if (!link) return;
    STORE.currentTab = link.dataset.tab;
    DOMHandler.reload();
  });
}

const HomePage = {
  toString() {
    return render();
  },
  addListeners() {
    listenNavigation();
  },
};
export default HomePage;
