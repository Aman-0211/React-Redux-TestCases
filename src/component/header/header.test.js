import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAttr } from '../../utils';

const setUp = () => {
  const component = shallow(<Header />);
  return component;
};

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('it should render without the errors', () => {
    const wraper = findByTestAttr(component, 'headerComponent');
    expect(wraper.length).toBe(1);
  });

  it('Should render a Wraper', () => {
    const wraper = findByTestAttr(component, 'wraper');
    expect(wraper.length).toBe(1);
  });

  it('Should render a logo', () => {
    const wraper = findByTestAttr(component, 'logo');
    expect(wraper.length).toBe(1);
  });

  it('Should render a title', () => {
    const wraper = findByTestAttr(component, 'title');
    expect(wraper.length).toBe(1);
  });
});
