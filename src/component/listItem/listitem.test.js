import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './index';
import { findByTestAttr, checkProps } from '../../utils';

const setUp = (props = {}) => {
  const Component = shallow(<ListItem {...props} />);
  return Component;
};

describe('ListItem Componemt', () => {
  describe('Checking PropTypes', () => {
    it('Should render without Warning', () => {
      const expectedPropType = {
        title: 'Test Title',
        desc: 'Test Description',
      };
      const propsErr = checkProps(ListItem, expectedPropType);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Component Render ', () => {
    let wraper;
    beforeEach(() => {
      const props = {
        title: 'Test Title',
        desc: 'Test desc',
      };
      wraper = setUp(props);
    });
    it('Should render ListItem Component without error', () => {
      const component = findByTestAttr(wraper, 'ListItemComponent');
      expect(component.length).toBe(1);
    });
    it('Should render Title Component without error', () => {
      const title = findByTestAttr(wraper, 'listItemTitle');
      expect(title.length).toBe(1);
    });
    it('Should render ListItem Desc  Component without error', () => {
      const desc = findByTestAttr(wraper, 'listItemDesc');
      expect(desc.length).toBe(1);
    });
  });
  /* This check when the component props is null  */

  describe('Should not render', () => {
    let wraper;
    beforeEach(() => {
      const props = {
        desc: 'Test desc',
      };
      wraper = setUp(props);
    });
    it('Component is not render', () => {
      const component = findByTestAttr(wraper, 'ListItemComponent');
      expect(component.length).toBe(0);
    });
  });
});
