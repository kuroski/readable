import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import categories from './categories.reducer';

export default combineReducers({
  categories,
  routing: routerReducer
});
