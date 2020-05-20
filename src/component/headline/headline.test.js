import React from 'react';
import { shallow } from 'enzyme';
import HeadLine from './index';

import { findByTestAttr, checkProps } from '../../utils';

const setUp = (props = {}) => {
  const Component = shallow(<HeadLine {...props} />);
  return Component;
};

describe('HeadLine Component', () => {
  describe('Checking Prop-Types', () => {
    it('Should not throw warning', () => {
      /* expected Props */

      const exceptedProps = {
        header: 'Test Header',
        desc: 'Test Desc',
        tempArray: [
          {
            fName: 'Test fName',
            lName: 'Test lNAme',
            email: 'Test email',
            age: 23,
            onlineStatus: false,
          },
        ],
      };

      const propsError = checkProps(HeadLine, exceptedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Have Props', () => {
    let wraper;
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Test Desc',
      };
      wraper = setUp(props);
    });

    it('Should render without error', () => {
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
