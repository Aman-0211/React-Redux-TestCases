import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utils';
import SharedButton from './index';

const setUp = (props = {}) => {
  const Component = shallow(<SharedButton {...props} />);
  return Component;
};

describe('SharedButton Component', () => {
  describe('Checking PropsTyprs', () => {
    it('Should not throe warning', () => {
      const expectedPropType = {
        buttonText: 'Example button Text',
        emitEvent: () => {},
      };
      const propsError = checkProps(SharedButton, expectedPropType);
      expect(propsError).toBeUndefined();
    });
  });
  describe('Render', () => {
    let wraper;
    beforeEach(() => {
      const props = {
        buttonText: 'Test Button',
        emitEvent: () => {},
      };
      wraper = setUp(props);
    });

    it('Should render Button', () => {
      const button = findByTestAttr(wraper, 'buttonComponent');
      expect(button.length).toBe(1);
    });
  });
});
