import { input } from '../components/input.js';

function render() {
  return `
  <main class="section">
    <section class="container">
      <h1 class="heading--lg text-center mb-4">Login</h1>
      <form class="flex flex-column gap-4 mb-4 js-login-form">
        ${input({
          label: 'email',
          id: 'email',
          placeholder: 'john@example.com',
          type: 'email',
          required: true,
          value: 'test3@mail.com',
        })}
        ${input({
          label: 'password',
          id: 'password',
          placeholder: '******',
          type: 'password',
          required: true,
          value: 'invalid',
        })}
        <button class="button button--primary">Login</button>
      </form>
    <a href="#" class="block text-center js-signup-link">Create account</a>
    </section>
  </main>
  `;
}
const LoginPage = {
  toString() {
    return render();
  },
  addListeners() {},
};
export default LoginPage;
