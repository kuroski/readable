import { CALL_API } from 'redux-api-middleware';
import { CATEGORY_GET_REQUEST } from '../reducers/categories.reducer';

import getApiUrl from '.';

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

export function getCategories() {
  return {
    [CALL_API]: {
      endpoint: `${getApiUrl()}/categories`,
      method: 'GET',
      types: [CATEGORY_GET_REQUEST],
      headers
    }
  };
}
