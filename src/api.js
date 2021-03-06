const apiUrl = process.env.REACT_APP_API_URL;

let token = localStorage.token;

if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  Accept: 'application/json',
  Authorization: token,
  'Content-Type': 'application/json'
};

export const getCategories = () =>
  fetch(`${apiUrl}/categories/`, { headers })
    .then(response => response.json())
    .then(data => data.categories);

export const getPosts = (category = '') => {
  if (category)
    return fetch(`${apiUrl}/${category}/posts`, { headers }).then(response =>
      response.json()
    );
  else
    return fetch(`${apiUrl}/posts`, { headers }).then(response =>
      response.json()
    );
};
