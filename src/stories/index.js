import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import CategoriesBar from '../components/CategoriesBar/CategoriesBar';

const categories = [
  {
    name: 'react',
    path: 'react'
  },
  {
    name: 'redux',
    path: 'redux'
  },
  {
    name: 'udacity',
    path: 'udacity'
  }
];

storiesOf('CategoriesBar', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('With some categories', () => <CategoriesBar categories={categories} />)
  .add('With no categories', () => <CategoriesBar categories={[]} />);
