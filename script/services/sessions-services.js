// login session
// base_uri
const BASE_URI = 'https://expensable-api.herokuapp.com/';

// token key in sessionStorage
const tokenKey = 'expensable_key';

// function login
async function login(credentials = { email, password }) {
  const response = await fetch(`${BASE_URI}login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials), // set on JSON.stringify
  });

  const data = await response.json();
  if(!response.ok){
    throw new Error(data.errors)
  }
  sessionStorage.setItem(tokenKey, data.token);
  return data;
}

// logout
async function logout() {
  const token = sessionStorage.getItem(tokenKey)
  const response = await fetch(`${BASE_URI}logout`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${token}`,
    },
  });

  // console.log(response)
  let data;
  try {
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.errors);
    }
  } catch (error) {
    data = response.statusText
    console.log(data)
  }

  if(!response.ok){
    throw new Error(data.errors);
  }
  sessionStorage.removeItem(tokenKey, data.token);
  return data;
}

// logout

export { login, logout};
