import { tokenKey } from "../config.js";
import apiFetch from "./api-fetch.js";


async function createUser( newUser = { email, password, firstName, lastName, phone }
) {
  const { token, ...user } = await apiFetch('singup', { body: credentials });
  sessionStorage.setItem(tokenKey, token);
  return user;
}

async function updateUser( newUser = { email, password, firstName, lastName, phone }
) {
  const { token, ...user } = await apiFetchtch('profile', {
    body: data,
    method: 'PATCH',
  });
  sessionStorage.setItem(tokenKey, token);
  return user;
}
