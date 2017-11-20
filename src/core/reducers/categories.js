import categoriesTypes from '../types/categories.types';

const INITIAL_STATE = [];

function categoriesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case categoriesTypes.CATEGORIES_RETRIEVE_ALL:
      return action.categories;
    default:
      return state;
  }
}

export default categoriesReducer;
