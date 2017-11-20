import { getCategories } from '../api';

/*
 * Action creators
 */
const RETRIEVE_ALL = 'category/RETRIEVE_ALL';

export function retrieveAll() {
  return dispatch => {
    getCategories().then(categories =>
      dispatch({ type: RETRIEVE_ALL, categories })
    );
  };
}

/*
 * Reducer
 */

const INITIAL_STATE = [];

function categoriesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RETRIEVE_ALL:
      return action.categories;
    default:
      return state;
  }
}

export default categoriesReducer;
