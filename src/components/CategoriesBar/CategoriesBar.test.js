import React from 'react';
import renderer from 'react-test-renderer';
import Link from 'react-router-dom/Link';
import shallow from 'enzyme/shallow';
import CategoriesBar from './CategoriesBar';
import { categories } from '../../common/testData';

describe('CategoriesBar component', () => {
  let props;

  const build = () => {
    return shallow(<CategoriesBar {...props} />);
  };

  beforeEach(() => {
    props = {
      categories: categories
    };
  });

  it('renders CategoriesBar component correctly', () => {
    const wrapper = build();
    const CategoriesBarTree = renderer.create(wrapper[0]).toJSON();
    expect(CategoriesBarTree).toMatchSnapshot();
  });

  it('must show all categories', () => {
    const wrapper = build();
    props.categories.forEach(category =>
      expect(wrapper.contains(category.name)).toBe(true)
    );
  });

  it('must show categories links', () => {
    const wrapper = build();
    props.categories.forEach(category => {
      const link = <Link to={category.path}>{category.name}</Link>;
      expect(wrapper.contains(link)).toBe(true);
    });
  });
});
