import React from 'react';
import { shallow } from 'enzyme';
import HeadLine from './index';

import { findByTestAttr } from '../../utils';

const setUp = (props = {}) => {
  const Component = shallow(<HeadLine {...props} />);
  return Component;
};

describe('HeadLine Component', () => {
  describe('Have Props', () => {
    let wraper;

    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Test Desc',
      };
      wraper = setUp(props);
    });

    it('Should render with error', () => {
      const component = findByTestAttr(wraper, 'headlineComponent');
      expect(component.length).toBe(1);
    });

    it('Should render H1', () => {
      const h1 = findByTestAttr(wraper, 'header');
      expect(h1.length).toBe(1);
    });

    it('Should render desc', () => {
      const desc = findByTestAttr(wraper, 'desc');
      expect(desc.length).toBe(1);
    });
  });
  describe('Have No Props', () => {
    let wraper;
    beforeEach(() => {
      wraper = setUp();
    });

    it('Should not render', () => {
      const component = findByTestAttr(wraper, 'headlineComponent');
      expect(component.length).toBe(0);
    });
  });
});
