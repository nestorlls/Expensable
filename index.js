// imports
import { login, logout } from './script/services/sessions-services.js';

// user credentials
const userCredentials = {
  email: 'llanque@able.co',
  password: '123456',
};

// main
console.log('hola');

// async -await return a promise --> resolved with .then()

async function test() {
  try {
    const userlogin = await login(userCredentials);
    console.log(userlogin);

    const message = await logout();
    // console.log(message);

  } catch (error) {
    console.log(error);
  }
}

test();
