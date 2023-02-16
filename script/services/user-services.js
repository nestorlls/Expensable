import { tokenKey } from '../config.js';
import apiFetch from './api-fetch.js';

export async function createUser(
  newUser = { email, password, firstName, lastName, phone }
) {
  const { token, ...user } = await apiFetch('singup', { body: newUser });
  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function updateUser(
  data = { email, password, firstName, lastName, phone }
) {
  const { token, ...user } = await apiFetchtch('profile', {
    body: data,
    method: 'PATCH',
  });
  return user;
}
