import { getCategories } from '../../api';
import categoriesTypes from '../types/categories.types';

export function retrieveAll() {
  return dispatch => {
    getCategories().then(categories =>
      dispatch({ type: categoriesTypes.CATEGORIES_RETRIEVE_ALL, categories })
    );
  };
}
