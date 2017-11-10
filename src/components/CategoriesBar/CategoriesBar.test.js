import React from 'react';
import ReactDOM from 'react-dom';
import CategoriesBar from './CategoriesBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CategoriesBar categories={[]} />, div);
});
